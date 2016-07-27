
// Declare some missing configurations of typext-config.d.ts
declare module TypExt.data {
  interface IConnectionConfig { }
}

declare module TypExt.ux.colorpick {
  interface ISelectionConfig { }
}

// Declare missing TypExt.ajax.IRequestConfig interface
module TypExt.ajax {
  export interface IRequestConfig extends TypExt.data.IRequestConfig {
    /** [Config Option] (String/Function) The URL to which to send the request, or a function to call which returns a URL string.
    * The scope of the function is specified by the scope option.
    * Defaults to the configured url.
    */
    url: any;
    /** [Config Option] (Boolean) true if this request should run asynchronously.
    * Setting this to false should generally be avoided, since it will cause the UI to be blocked, the user won't be able to interact with the browser until the request completes.
    * Defaults to true.
    */
    async?: boolean;
    /** [Config Option] (Object/String/Function) An object containing properties which are used as parameters to the request, a url encoded string or a function to call to get either.
    * The scope of the function is specified by the scope option.
    */
    params?: any;
    /** [Config Option] (String) The HTTP method to use for the request.
    * Defaults to the configured method, or if no method was configured, "GET" if no parameters are being sent, and "POST" if parameters are being sent.
    * Note that the method name is case-sensitive and should be all caps.
    */
    method?: string;
    /** [Config Option] (Function) The function to be called upon receipt of the HTTP response.
    * The callback is called regardless of success or failure.
    */
    callback?: (options: TypExt.ajax.IRequestConfig, success: boolean, response: XMLHttpRequest) => void;
    /** [Config Option] (Function) The function to be called upon success of the request. */
    success?: (response: XMLHttpRequest, options: TypExt.ajax.IRequestConfig) => void;
    /** [Config Option] (Function) The function to be called upon failure of the request. */
    failure?: (response: XMLHttpRequest, options: TypExt.ajax.IRequestConfig) => void;
    /** [Config Option] (Object) The scope in which to execute the callbacks: The "this" object for the callback function.
    * If the url, or params options were specified as functions from which to draw values, then this also serves as the scope for those function calls.
    * Defaults to the browser window.
    */
    scope?: any;
    /** [Config Option] (Number) The timeout in milliseconds to be used for this request. Defaults to 30 seconds. */
    timeout?: number;
    /** [Config Option] (Object/String) The <form> Element or the id of the <form> to pull parameters from. */
    form?: any;
    /** [Config Option] (Boolean) Only meaningful when used with the form option.
    * True if the form object is a file upload (will be set automatically if the form was configured with enctype "multipart/form-data").
    * File uploads are not performed using normal "Ajax" techniques, that is they are not performed using XMLHttpRequests.
    * Instead the form is submitted in the standard manner with the DOM <form> element temporarily modified to have its target set to refer to a dynamically generated,
    * hidden <iframe> which is inserted into the document but removed after the return data has been gathered.
    * The server response is parsed by the browser to create the document for the IFRAME.
    * If the server is using JSON to send the return object, then the Content-Type header must be set to "text/html" in order to tell the browser to insert the text unchanged into the document body.
    * The response text is retrieved from the document, and a fake XMLHttpRequest object is created containing a responseText property in order to conform to the requirements of event handlers and callbacks.
    * Be aware that file upload packets are sent with the content type multipart/form and some server technologies (notably JEE)
    * may require some custom processing in order to retrieve parameter names and parameter values from the packet content.
    */
    isUpload?: boolean;
    /** [Config Option] (Object) Request headers to set for the request.
    * The XHR will attempt to set an appropriate Content-Type based on the params/data passed to the request.
    * To prevent this, setting the Content-Type header to null or undefined will not attempt to set any Content-Type and it will be left to the browser.
    */
    headers?: any;
    /** [Config Option] (Object) XML document to use for the post. Note: This will be used instead of params for the post data. Any params will be appended to the URL. */
    xmlData?: any;
    /** [Config Option] (Object/String) JSON data to use as the post. Note: This will be used instead of params for the post data. Any params will be appended to the URL. */
    jsonData?: any;
    /** [Config Option] (String) A raw string to use as the post. Note: This will be used instead of params for the post data. Any params will be appended to the URL. */
    rawData?: string;
    /** [Config Option] (Array) An array of bytes to submit in binary form. Any params will be appended to the URL. If binaryData is present, you must set binary to true and options.method to POST. */
    binaryData?: any[];
    /** [Config Option] (Boolean) True to add a unique cache-buster param to GET requests. */
    disableCaching?: boolean;
    /** [Config Option] (Boolean) True to add the withCredentials property to the XHR object. */
    withCredentials?: boolean;
    /** [Config Option] (String) The username to pass when using withCredentials. */
    username?: string;
    /** [Config Option] (String) The password to pass when using withCredentials. */
    password?: string;
    /** [Config Option] (Boolean) True if the response should be treated as binary data. If true, the binary data will be accessible as a "responseBytes" property on the response object. */
    binary?: boolean;
  }
}

// Some addons: Ajax class, extend Container and Panel

module TypExt.addon {

  export class Ajax {
    
    /** [Method] Sends an HTTP request to a remote server.
    * @param options Object The request configuration.
    * @returns Object The request object. This may be used to cancel the request.
    */
    static request(options: TypExt.ajax.IRequestConfig, extraArgs?: any): TypExt.ajax.IRequestConfig {
      if (extraArgs == null)
        return Ext.Ajax.request(options);
      else
        return Ext.Ajax.request(Ext.Object.merge(options, extraArgs));
    }

    static httpGet(options: TypExt.ajax.IRequestConfig, extraArgs?: any): TypExt.ajax.IRequestConfig {
      options.method = "GET"
      return TypExt.addon.Ajax.request(options, extraArgs);
    }

    static httpPost(options: TypExt.ajax.IRequestConfig, extraArgs?: any): TypExt.ajax.IRequestConfig {
      options.method = "POST"
      return TypExt.addon.Ajax.request(options, extraArgs);
    }

  }
}

let JsObject = Object;
let JsError = Error;

module TypExt.addon {
  
  export module data {

    export interface IModelField extends Ext.data.IField {
      type: string;
    }
    
    export interface IModelInstance extends Ext.data.IModel {
      data: any;
    }
    
    export interface IHasManyAssociation {
      model: string;
      name: string;
    }

    export abstract class AbstractModelFactory {
      
      abstract getClassName(): string;
      
      // Definie static instance to check we don't instantiate the class multiple times
      /*private static instance: AbstractModelFactory;
      constructor() {
        if (AbstractModelFactory.instance) {
          throw new JsError("Can't instantiate this class multiple times");
        }
        
         AbstractModelFactory.instance = this;
      }*/
      
      private static definedModels = {};

      buildModelConfig(extendedClass: string = 'Ext.data.Model', extraConfig?: {}): {} {
        this.checkModel();

        let config = {
          extend: extendedClass, //'Ext.data.Model',
          fields: this.getFields()
        };
        
        if (extraConfig != null) {
          config = Ext.Object.merge(config, extraConfig);
        }

        return config;
      }
      
      defineModel(extendedClass: string = 'Ext.data.Model', extraConfig?: {}): void {
        if (AbstractModelFactory.definedModels[this.getClassName()] ) {
          throw new JsError(`The model '${this.getClassName()}' can't be defined multiple times`);
        }

        let config = this.buildModelConfig(extendedClass, extraConfig);
        Ext.define(this.getClassName(), config);

        AbstractModelFactory.definedModels[this.getClassName()] = true;
      }
      
      requireModel(extendedClass: string = 'Ext.data.Model', extraConfig?: {}): void {
        if ( AbstractModelFactory.definedModels[this.getClassName()] == false ) {
         this.defineModel(extendedClass, extraConfig)
        }
      }
      
      // Fields reflection
      getFields(): [string|IModelField] {
        let fields = [];
        for( let key of JsObject.keys(this) ) {
          let keyType = typeof(key);
          if( keyType == 'string' || keyType == 'object' ) {
            fields.push( this[key] );
          } else {
            throw 'Invalid field JS type, must be string or object';
          }
        }
        
        return <[string|IModelField]>fields;
      }

      private checkModel(): void {
        let fieldNames = [];
        let fieldNameSet = {};
        
        for (let field of this.getFields()) {
          let fieldName = typeof(field) == 'string' ? <string>field : (<IModelField>field).name;
          fieldNames.push(fieldName);
          fieldNameSet[fieldName] = true;
          
          if (!this[fieldName]) {
            throw `Inconsistent ExtJS model definition, field '${fieldName}' is not named correctly !`
          }
        }
        
        let fieldsCount = fieldNames.length
        let distinctFieldsCount = JsObject.keys(fieldNameSet).length
        if( fieldsCount != distinctFieldsCount) {
          throw `Inconsistent ExtJS model definition, expected ${fieldsCount} distinct fields but has only ${distinctFieldsCount} !`
        }
      }
    }

  }
  
  export module dd {
    export class DropTarget {
      static create(el: any, config: Ext.dd.IDropTarget): Ext.dd.IDropTarget {
        return Ext.create('Ext.dd.DropTarget', el, config);
      }
    }
  }

  export module container {

    export interface IExtendedContainer {

      /** [Method] Return the items as an array.
      */
      getItems(): TypExt.addon.container.IExtendedContainer[];

      /** [Method] Return the item located at specified index.
      * @param index Number 
      */
      getItem(index: number): TypExt.addon.container.IExtendedContainer;
    }

  }

  export class Container {
    static extend(extContainer: any): TypExt.addon.container.IExtendedContainer {
      extContainer.getItems = function() {
        this.items.items.forEach(function(item) {
          TypExt.addon.Panel.extend(item);
        });
        return this.items.items;
      }
      extContainer.getItem = function(index: number) {
        var item = this.items.items[index];
        if (item === undefined) {
          throw "can't find item at index " + index;
        }
        return TypExt.addon.Panel.extend(item);
      }
      return extContainer;
    }
  }

  export module panel {
    export interface IPanel extends Ext.panel.IPanel, TypExt.addon.container.IExtendedContainer { }
  }

  export class Panel {

    static createAndExtend(config: TypExt.panel.IPanelConfig, extraArgs?: any): TypExt.addon.panel.IPanel {
      return TypExt.addon.Panel.extend(TypExt.panel.Panel.create(config, extraArgs));
    }
    static extend(extPanel: Ext.panel.IPanel): TypExt.addon.panel.IPanel {
      return TypExt.addon.Container.extend(extPanel);
    }
  }
}
