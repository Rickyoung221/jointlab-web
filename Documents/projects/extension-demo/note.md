First,

```bash
 yarn create react-app extension-demo --template typescript
```

Build the app.

```
yarn run build
```

It produces a build folder, which would be used for preview later.

![](https://tva1.sinaimg.cn/large/e6c9d24egy1h17z98qf0fj20lo0fydg8.jpg) 

We are now ready to load the extension into Chrome. This process is relatively straightforward. First, visit `chrome://extensions/` on your Chrome browser and enable the developer mode toggle:

Then, click **Load unpacked** and select the `build` folder. Extension app is now loaded, and it’s listed on the extensions page. 

It should look like this

![Screen Shot 2022-04-12 at 00.27.23](https://tva1.sinaimg.cn/large/e6c9d24egy1h17z9p440yj21040h3gnx.jpg)



## Access the web Page

- chrome API 
- Content-Script

How to interact with content scripts?

## Message Passing

![Diagram Of Messaging Passing API](https://tva1.sinaimg.cn/large/e6c9d24egy1h17za7g1ehj20e8097mxl.jpg)

- chrome.runtime.sendResponse()



```
yarn add @types/chrome --save-de
```



Content Scripts are different and isolaed from the CRA. 

> we learned that React will generate only one file with the application code. So how can we generate two files, one for the React app and another for the content scripts?

we could update the build settings from CRA and ask it to generate two files for us. This can be done with the help of an additional library called [Craco](https://github.com/gsoft-inc/craco).

```bash
yarn add @craco/craco --save
```



