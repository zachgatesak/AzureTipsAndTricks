(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{574:function(e,t,r){"use strict";r.r(t);var a=r(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥 Checkout our new Azure Developer page at "),r("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service documentation"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://youtu.be/2CLcw-PXXa4?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("5 Things you didn't know about Azure App Service"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"_5-things-you-didn-t-know-about-azure-app-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-things-you-didn-t-know-about-azure-app-service"}},[e._v("#")]),e._v(" 5 Things you didn't know about Azure App Service")]),e._v(" "),r("h4",{attrs:{id:"run-your-application-on-azure-app-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-your-application-on-azure-app-service"}},[e._v("#")]),e._v(" Run your application on Azure App Service")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service"),r("OutboundLink")],1),e._v(" is a family of Azure services that you use to run your applications. You can use "),r("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service Web Apps"),r("OutboundLink")],1),e._v(" to run your websites and APIs and "),r("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/mobile/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service Mobile Apps"),r("OutboundLink")],1),e._v(" to run the backend API for your mobile app that supports functionality like working offline. Also, "),r("a",{attrs:{href:"https://azure.microsoft.com/services/functions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions"),r("OutboundLink")],1),e._v(" is part of Azure App Service as you can run an Azure Function on an "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/overview-hosting-plans?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Plan"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("In this post, we'll discuss 5 relatively unknown things about Azure App Service.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")])]),e._v(" "),r("h4",{attrs:{id:"_1-back-up-your-app-service-and-your-database"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-back-up-your-app-service-and-your-database"}},[e._v("#")]),e._v(" 1. Back up your App Service and your database")]),e._v(" "),r("p",[e._v("When things go wrong, a backup can save you. You can use a backup of your system to restore it to the way it was before things went wrong. In App Service, you can "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/manage-backup?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("backup your App Service"),r("OutboundLink")],1),e._v(", which backs up all its configuration and settings and also its contents, so the entire application that is deployed to the App Service. And, you can also back up services that are connected to the App Service, like an "),r("a",{attrs:{href:"https://azure.microsoft.com/services/sql-database/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure SQL Database"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://azure.microsoft.com/services/storage/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage"),r("OutboundLink")],1),e._v(". You can create these backups from the "),r("strong",[e._v("Backups menu")]),e._v(" in your App Service, as you can see in the image below:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/77backup.png")}}),e._v(" "),r("p",[e._v("(App Service Backups in the Azure portal)")]),e._v(" "),r("h4",{attrs:{id:"_2-test-in-production"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-test-in-production"}},[e._v("#")]),e._v(" 2. Test in production")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/deploy-staging-slots?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deployment slots"),r("OutboundLink")],1),e._v(" are a very powerful feature of Azure App Service. They provide additional instances of your service that you can use as test versions of your app or to release with no downtime. Additionally, you can use deployment slots to test in production. When you have a deployment slot configured, you can indicate the percentage of traffic to be routed to the slot. This way, you can, for instance, route 50% of traffic to your deployment slot and 50% to your production slot. This enables you to test a new version of your app to see if and how users use a new feature. You can configure the testing in production feature from the "),r("strong",[e._v("Deployment slots menu")]),e._v(".")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/77testinproduction.png")}}),e._v(" "),r("p",[e._v("(Test in production in the Azure portal)")]),e._v(" "),r("h4",{attrs:{id:"_3-implement-authentication-without-changing-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-implement-authentication-without-changing-code"}},[e._v("#")]),e._v(" 3. Implement authentication without changing code")]),e._v(" "),r("p",[e._v("In Azure, you can secure your application with "),r("a",{attrs:{href:"https://azure.microsoft.com/services/active-directory/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Active Directory"),r("OutboundLink")],1),e._v(", which enables users in your organization to authenticate to your application. You can also use "),r("a",{attrs:{href:"https://azure.microsoft.com/services/active-directory/external-identities/b2c/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Active Directory B2C"),r("OutboundLink")],1),e._v(" to allow users from outside your organization to log into your app using external identities, like a Microsoft or Google account. Implementing this type of security involves making changes to your application and configuration. But, with "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/overview-authentication-authorization?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service Easy Authentication"),r("OutboundLink")],1),e._v(", you can enable authentication with a flip of a switch, without changing any code. The Easy Authentication feature enables you to configure Azure Active Directory authentication, or authentication with other Identity Providers and creates a security layer between users and your application. When Easy Authentication is enabled, users always have to log in to use your app. You can enable Easy Authentication from the "),r("strong",[e._v("Authentication / Authorization menu")]),e._v(" and configure your authentication method from there.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/77auth.png")}}),e._v(" "),r("p",[e._v("(App Service Easy Authentication)")]),e._v(" "),r("h4",{attrs:{id:"_4-extend-the-functionality-of-you-app-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-extend-the-functionality-of-you-app-service"}},[e._v("#")]),e._v(" 4. Extend the functionality of you App Service")]),e._v(" "),r("p",[e._v("Your Azure App Service has many capabilities out-of-the-box. But it can do even more. You can extend its functionality by adding "),r("a",{attrs:{href:"https://azure.microsoft.com/blog/azure-web-sites-extensions/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),r("OutboundLink")],1),e._v(" to it. When you go to the "),r("strong",[e._v("Extensions menu")]),e._v(", you can install extensions, like extensions for monitoring and logging and extensions for certificate management. And there are also extensions for runtimes that aren't supported by default, like Python.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/77extensions.png")}}),e._v(" "),r("p",[e._v("(App Service extensions in the Azure portal)")]),e._v(" "),r("h4",{attrs:{id:"_5-run-mysql-in-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-run-mysql-in-app"}},[e._v("#")]),e._v(" 5. Run MySQL In App")]),e._v(" "),r("p",[e._v("You can run a MySQL database in an App Service by using the "),r("a",{attrs:{href:"https://github.com/projectkudu/kudu/wiki/MySQL-in-app?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL In App feature"),r("OutboundLink")],1),e._v(". This creates a MySQL database in the filesystem of the App Service and runs the MySQL process. This works well and is a very cost effective way to run a database. The database stays in your App Service, so this is not a good solution for App Services that you need to scale. You can enable this feature from the "),r("strong",[e._v("MySQL In App menu")]),e._v(" and also configure logging from there. Once it is enabled, you can find the credentials to log into the database in a file called "),r("strong",[e._v("MYSQLCONNSTR_localdb.ini")]),e._v(", which you can find in the filesystem of the App Service in the "),r("strong",[e._v("home/data/mysql folder")]),e._v(". You can access the filesystem through FTP of via the KUDU Console.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/77mysql.png")}}),e._v(" "),r("p",[e._v("(MySQL In App in the Azure portal)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service"),r("OutboundLink")],1),e._v(" provides great services to run your applications in. And App Service comes with lots of features, including "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/manage-backup?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("backups"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/deploy-staging-slots?WT.mc_id=docs-azuredevtips-azureappsdev#route-traffic",target:"_blank",rel:"noopener noreferrer"}},[e._v("testing in production"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service/overview-authentication-authorization?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Easy authentication"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://azure.microsoft.com/blog/azure-web-sites-extensions/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("extensions"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/projectkudu/kudu/wiki/MySQL-in-app?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySQL In App"),r("OutboundLink")],1),e._v(". Go and check it out!")])])}),[],!1,null,null,null);t.default=o.exports}}]);