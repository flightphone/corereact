# https://hub.docker.com/_/microsoft-dotnet-core
FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /source

# copy csproj and restore as distinct layers
COPY . .

# copy everything else and build app
RUN apt-get update
RUN apt-get install curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash
RUN apt-get install nodejs 

RUN dotnet restore
RUN dotnet publish -c release -o /app --no-restore

# final stage/image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "corereact.dll"]
