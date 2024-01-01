using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using se347_be.Model;
using System.Collections.Generic;

namespace se347_be.APIs
{
    public class MyChat
    {
        public MyChat() { }
        public Conversation_DTO get_conversation(long user_id, long shop_id, int limit)
        {
            Conversation_DTO response = new Conversation_DTO();
            List<Message_DTO> response_messages = new List<Message_DTO>();
            using (DataContext context = new DataContext())
            {
                SqlShop? shop = context.shops.Where(s => s.ID == shop_id).FirstOrDefault();
                if (shop == null)
                {
                    return response;
                }
                SqlUser? user = context.users.Where(s => s.ID == user_id).FirstOrDefault();
                if (user == null)
                {
                    return response;
                }
                response.logo = shop.logo;
                response.name = shop.name;
                SqlConversation? conversation = context.conversations.Include(s => s.shop).Include(s => s.user).Where(s => s.shop == shop && s.user == user).Include(s => s.messages).Take(limit).FirstOrDefault();
                if (conversation == null)
                {

                    return response;
                }
                else
                {
                    if (conversation.messages.Any())
                    {
                        List<SqlMessage> messages = conversation.messages;
                        foreach (SqlMessage message in messages)
                        {
                            Message_DTO item = new Message_DTO();
                            item.message = message.message;
                            item.time = message.time.AddHours(7);
                            item.type = message.type;
                            response_messages.Add(item);
                        }
                    }
                    response.messages = response_messages.OrderByDescending(s => s.time).ToList() ;
                }
            }
            return response;
        }

        public async Task<bool> customer_new_message(long user_id, long shop_id, string message)
        {
            using (DataContext context = new DataContext())
            {
                SqlShop? shop = context.shops.Where(s => s.ID == shop_id).FirstOrDefault();
                if (shop == null)
                {
                    return false;
                }
                SqlUser? user = context.users.Where(s => s.ID == user_id).FirstOrDefault();
                if (user == null)
                {
                    return false;
                }
                SqlConversation? conversation = context.conversations.Include(s => s.shop).Include(s => s.user).Where(s => s.shop == shop && s.user == user).Include(s => s.messages).FirstOrDefault();
                if (conversation == null)
                {
                    conversation = new SqlConversation();
                    conversation.shop = shop;
                    conversation.user = user;

                    List<SqlMessage> messages = new List<SqlMessage>();

                    SqlMessage msg = new SqlMessage();
                    msg.type = true;
                    msg.message = message;
                    msg.conversation = conversation;
                    messages.Insert(0, msg);
                    conversation.messages = messages;
                    conversation.is_seen = false;
                    conversation.last_time = DateTime.UtcNow;

                    context.conversations.Add(conversation);
                    context.messages.Add(msg);
                    await context.SaveChangesAsync();
                    return true;
                }
                else
                {
                    SqlMessage msg = new SqlMessage();
                    msg.type = true;
                    msg.message = message;
                    msg.conversation = conversation;
                    conversation.messages.Insert(0, msg);
                    conversation.last_time = DateTime.UtcNow;
                    conversation.is_seen = false;

                    await context.SaveChangesAsync();
                    return true;
                }
            }
        }

        public async Task<bool> seller_new_message(long user_id, long shop_id, string message)
        {
            using (DataContext context = new DataContext())
            {
                SqlShop? shop = context.shops.Where(s => s.ID == shop_id).FirstOrDefault();
                if (shop == null)
                {
                    return false;
                }
                SqlUser? user = context.users.Where(s => s.ID == user_id).FirstOrDefault();
                if (user == null)
                {
                    return false;
                }
                SqlConversation? conversation = context.conversations.Include(s => s.shop).Include(s => s.user).Where(s => s.shop == shop && s.user == user).Include(s => s.messages).FirstOrDefault();
                if (conversation == null)
                {
                    conversation.shop = shop;
                    conversation.user = user;

                    List<SqlMessage> messages = new List<SqlMessage>();

                    SqlMessage msg = new SqlMessage();
                    msg.type = false;
                    msg.message = message;
                    msg.conversation = conversation;
                    messages.Insert(0, msg);
                    conversation.messages = messages;

                    await context.SaveChangesAsync();
                    return true;
                }
                else
                {
                    SqlMessage msg = new SqlMessage();
                    msg.type = false;
                    msg.message = message;
                    msg.conversation = conversation;
                    conversation.messages.Insert(0, msg);
                    await context.SaveChangesAsync();
                    return true;
                }
            }
        }

        public List<Item_Conversation_DTO> get_list_conversations(long shop_id, int limit = 10)
        {
            List<Item_Conversation_DTO> response = new List<Item_Conversation_DTO>();
            using (DataContext context = new DataContext())
            {
                SqlShop? shop = context.shops.Where(s => s.ID == shop_id).Include(s => s.conversations).ThenInclude(s => s.user).FirstOrDefault();
                if (shop == null)
                {
                    return response;
                }
                if (shop.conversations.Any())
                {
                    if (shop.conversations.Count < limit)
                    {
                        limit= shop.conversations.Count;
                    }
                    shop.conversations= shop.conversations.OrderByDescending(s=>s.last_time).ToList();

                    for (int i = 0; i < limit; i++)
                    {
                        Item_Conversation_DTO item = new Item_Conversation_DTO();
                        item.conversation_id = shop.conversations[i].ID;
                        item.customer_avatar = shop.conversations[i].user.avatar;
                        item.customer_phone = shop.conversations[i].user.phoneNumber;
                        item.customer_name = shop.conversations[i].user.userName;
                        item.is_seen = shop.conversations[i].is_seen;
                        response.Add(item);
                    }
                }
                return response;
            }
        }

        public async Task<Conversation_DTO> get_conversation(long conversation_id, int limit)
        {
            Conversation_DTO response = new Conversation_DTO();
            List<Message_DTO> response_messages = new List<Message_DTO>();
            using (DataContext context = new DataContext())
            {
                SqlConversation? conversation = context.conversations.Include(s => s.user).Where(s => s.ID == conversation_id).Include(s => s.messages).OrderByDescending(s=>s.last_time).Take(limit).FirstOrDefault();
                if (conversation == null)
                {
                    return response;
                }
                else
                {
                    response.logo = conversation.user.avatar;
                    response.name = conversation.user.fullName;
                    if (conversation.messages.Any())
                    {
                        List<SqlMessage> messages = conversation.messages;
                        foreach (SqlMessage message in messages)
                        {
                            Message_DTO item = new Message_DTO();
                            item.message = message.message;
                            item.time = message.time;
                            item.type = message.type;
                            response_messages.Add(item);
                        }
                    }
                    response.messages = response_messages;
                    conversation.is_seen = true;
                    await context.SaveChangesAsync();
                }
            }
            return response;
        }

    }
}
