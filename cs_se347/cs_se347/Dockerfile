# Build Stage
FROM mcr.microsoft.com/dotnet/sdk:6.0-focal AS build
WORKDIR /source
COPY . .
RUN dotnet restore "cs_se347.csproj" --disable-parallel
RUN dotnet publish "cs_se347.csproj" -c release -o /app --no-restore

# Serve Stage
FROM mcr.microsoft.com/dotnet/aspnet:6.0-focal
WORKDIR /app
COPY --from=build /app ./
EXPOSE 80
ENTRYPOINT ["dotnet", "cs_se347.dll"]

# docker build -t 20522153/se347-cs:1.0.1 .
# docker push 20522153/se347-cs:1.0.1