﻿// <auto-generated />
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using cs_se347.Model;

#nullable disable

namespace cs_se347.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20231205130418_1.0.0")]
    partial class _100
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.14")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("cs_se347.Model.SqlProduct", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("ID"));

                    b.Property<int>("discount")
                        .HasColumnType("integer");

                    b.Property<List<string>>("options")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<string>("productImage")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<List<string>>("productListImage")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<string>("productName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("productPrice")
                        .HasColumnType("integer");

                    b.Property<int>("productSalePrice")
                        .HasColumnType("integer");

                    b.Property<float>("rating")
                        .HasColumnType("real");

                    b.Property<long>("shopID")
                        .HasColumnType("bigint");

                    b.Property<int>("sold")
                        .HasColumnType("integer");

                    b.HasKey("ID");

                    b.HasIndex("shopID");

                    b.ToTable("tb_table");
                });

            modelBuilder.Entity("cs_se347.Model.SqlShop", b =>
                {
                    b.Property<long>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<long>("ID"));

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("ID");

                    b.ToTable("tb_shop");
                });

            modelBuilder.Entity("cs_se347.Model.SqlProduct", b =>
                {
                    b.HasOne("cs_se347.Model.SqlShop", "shop")
                        .WithMany()
                        .HasForeignKey("shopID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("shop");
                });
#pragma warning restore 612, 618
        }
    }
}
