SystemJS.config({
  transpiler: "plugin-typescript",
  packages: {
    "fhp": {
      "format": "esm",
      "main": "main.ts"
    },
    "app": {
      "main": "main",
      "defaultExtension": "ts"
    }
  },
  typescriptOptions: {
	"experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "@angular/common": "npm:@angular/common@2.0.0-rc.1",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
    "@angular/core": "npm:@angular/core@2.0.0-rc.1",
    "@angular/http": "npm:@angular/http@2.0.0-rc.1",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.1",
    "@angular/router": "npm:@angular/router@2.0.0-rc.1",
    "@angular/router-deprecated": "npm:@angular/router-deprecated@2.0.0-rc.1",
    "@angular/upgrade": "npm:@angular/upgrade@2.0.0-rc.1",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "cluster": "github:jspm/nodelibs-cluster@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "core-js": "npm:core-js@1.2.6",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "es6-shim": "github:es-shims/es6-shim@0.35.1",
    "eventemitter3": "npm:eventemitter3@1.2.0",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "feathers": "npm:feathers@2.0.1",
    "feathers-authentication": "npm:feathers-authentication@0.7.7",
    "feathers-client": "npm:feathers-client@1.2.0",
    "feathers-hooks": "npm:feathers-hooks@1.5.3",
    "feathers-localstorage": "npm:feathers-localstorage@0.4.0",
    "feathers-memory": "npm:feathers-memory@0.7.1",
    "feathers-query-filters": "npm:feathers-query-filters@1.5.1",
    "feathers-rest": "npm:feathers-rest@1.3.0",
    "feathers-socketio": "npm:feathers-socketio@1.4.0",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.10",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
    "reflect-metadata": "npm:reflect-metadata@0.1.3",
    "rxjs": "npm:rxjs@5.0.0-beta.7",
    "socket.io-client": "npm:socket.io-client@1.4.6",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
    "traceur": "github:jmcriffey/bower-traceur@0.0.108",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "typescript": "npm:typescript@1.8.10",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha",
    "zone.js": "npm:zone.js@0.6.12"
  },
  packages: {
    "github:frankwallis/plugin-typescript@4.0.10": {
      "map": {
        "typescript": "npm:typescript@1.8.10"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.3.0"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:@angular/common@2.0.0-rc.1": {
      "map": {
        "@angular/core": "npm:@angular/core@2.0.0-rc.1"
      }
    },
    "npm:@angular/compiler@2.0.0-rc.1": {
      "map": {
        "@angular/core": "npm:@angular/core@2.0.0-rc.1"
      }
    },
    "npm:@angular/core@2.0.0-rc.1": {
      "map": {
        "rxjs": "npm:rxjs@5.0.0-beta.7",
        "zone.js": "npm:zone.js@0.6.12"
      }
    },
    "npm:@angular/http@2.0.0-rc.1": {
      "map": {
        "@angular/core": "npm:@angular/core@2.0.0-rc.1",
        "rxjs": "npm:rxjs@5.0.0-beta.6"
      }
    },
    "npm:@angular/platform-browser-dynamic@2.0.0-rc.1": {
      "map": {
        "@angular/common": "npm:@angular/common@2.0.0-rc.1",
        "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
        "@angular/core": "npm:@angular/core@2.0.0-rc.1",
        "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1"
      }
    },
    "npm:@angular/platform-browser@2.0.0-rc.1": {
      "map": {
        "@angular/common": "npm:@angular/common@2.0.0-rc.1",
        "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
        "@angular/core": "npm:@angular/core@2.0.0-rc.1"
      }
    },
    "npm:@angular/router-deprecated@2.0.0-rc.1": {
      "map": {
        "@angular/common": "npm:@angular/common@2.0.0-rc.1",
        "@angular/core": "npm:@angular/core@2.0.0-rc.1",
        "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1"
      }
    },
    "npm:@angular/router@2.0.0-rc.1": {
      "map": {
        "@angular/common": "npm:@angular/common@2.0.0-rc.1",
        "@angular/core": "npm:@angular/core@2.0.0-rc.1",
        "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1"
      }
    },
    "npm:@angular/upgrade@2.0.0-rc.1": {
      "map": {
        "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
        "@angular/core": "npm:@angular/core@2.0.0-rc.1",
        "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1"
      }
    },
    "npm:accepts@1.2.13": {
      "map": {
        "mime-types": "npm:mime-types@2.1.11",
        "negotiator": "npm:negotiator@0.5.3"
      }
    },
    "npm:accepts@1.3.1": {
      "map": {
        "mime-types": "npm:mime-types@2.1.11",
        "negotiator": "npm:negotiator@0.6.0"
      }
    },
    "npm:access-control@1.0.0": {
      "map": {
        "millisecond": "npm:millisecond@0.1.2",
        "setheader": "npm:setheader@0.0.4",
        "vary": "npm:vary@1.1.0"
      }
    },
    "npm:asn1.js@4.6.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asyncemit@3.0.1": {
      "map": {
        "eventemitter3": "npm:eventemitter3@1.2.0"
      }
    },
    "npm:babel-polyfill@6.8.0": {
      "map": {
        "babel-regenerator-runtime": "npm:babel-regenerator-runtime@6.5.0",
        "babel-runtime": "npm:babel-runtime@6.6.1",
        "core-js": "npm:core-js@2.4.0"
      }
    },
    "npm:babel-regenerator-runtime@6.5.0": {
      "map": {}
    },
    "npm:babel-runtime@5.8.38": {
      "map": {}
    },
    "npm:babel-runtime@6.6.1": {
      "map": {
        "core-js": "npm:core-js@2.4.0"
      }
    },
    "npm:base64-url@1.2.2": {
      "map": {}
    },
    "npm:base64id@0.1.0": {
      "map": {}
    },
    "npm:base64url@1.0.6": {
      "map": {
        "concat-stream": "npm:concat-stream@1.4.10",
        "meow": "npm:meow@2.0.0"
      }
    },
    "npm:bcryptjs@2.3.0": {
      "map": {}
    },
    "npm:benchmark@1.0.0": {
      "map": {}
    },
    "npm:better-assert@1.0.2": {
      "map": {
        "callsite": "npm:callsite@1.0.0"
      }
    },
    "npm:bindings@1.2.1": {
      "map": {}
    },
    "npm:bn.js@4.11.3": {
      "map": {}
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.2.3",
        "inherits": "npm:inherits@2.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.1.2"
      }
    },
    "npm:buffer-equal-constant-time@1.0.1": {
      "map": {}
    },
    "npm:buffer-xor@1.0.3": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:bufferutil@1.2.1": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.3.3"
      }
    },
    "npm:camelcase-keys@1.0.0": {
      "map": {
        "camelcase": "npm:camelcase@1.2.1",
        "map-obj": "npm:map-obj@1.0.1"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:color-string@0.3.0": {
      "map": {
        "color-name": "npm:color-name@1.1.1"
      }
    },
    "npm:color@0.8.0": {
      "map": {
        "color-convert": "npm:color-convert@0.5.3",
        "color-string": "npm:color-string@0.3.0"
      }
    },
    "npm:colorspace@1.0.1": {
      "map": {
        "color": "npm:color@0.8.0",
        "text-hex": "npm:text-hex@0.0.0"
      }
    },
    "npm:concat-stream@1.4.10": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.1.14",
        "typedarray": "npm:typedarray@0.0.6"
      }
    },
    "npm:content-disposition@0.5.1": {
      "map": {}
    },
    "npm:cookie-signature@1.0.6": {
      "map": {}
    },
    "npm:core-js@1.2.6": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:core-js@2.4.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "elliptic": "npm:elliptic@6.2.3"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:create-server@1.0.1": {
      "map": {
        "connected": "npm:connected@0.0.2"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.1",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:debug@0.7.4": {
      "map": {}
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:depd@1.1.0": {
      "map": {}
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:destroy@1.0.4": {
      "map": {}
    },
    "npm:diagnostics@1.0.1": {
      "map": {
        "colorspace": "npm:colorspace@1.0.1",
        "enabled": "npm:enabled@1.0.2",
        "kuler": "npm:kuler@0.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:ecdsa-sig-formatter@1.0.5": {
      "map": {
        "base64-url": "npm:base64-url@1.2.2"
      }
    },
    "npm:elliptic@6.2.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3",
        "inherits": "npm:inherits@2.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:enabled@1.0.2": {
      "map": {
        "env-variable": "npm:env-variable@0.0.3"
      }
    },
    "npm:engine.io-client@1.6.9": {
      "map": {
        "component-emitter": "npm:component-emitter@1.1.2",
        "component-inherit": "npm:component-inherit@0.0.3",
        "debug": "npm:debug@2.2.0",
        "engine.io-parser": "npm:engine.io-parser@1.2.4",
        "has-cors": "npm:has-cors@1.1.0",
        "indexof": "npm:indexof@0.0.1",
        "node-ws": "npm:ws@1.0.1",
        "node-xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1",
        "parsejson": "npm:parsejson@0.0.1",
        "parseqs": "npm:parseqs@0.0.2",
        "parseuri": "npm:parseuri@0.0.4",
        "ws": "npm:ws@1.0.1",
        "xmlhttprequest-ssl": "npm:xmlhttprequest-ssl@1.5.1",
        "yeast": "npm:yeast@0.1.2"
      }
    },
    "npm:engine.io-parser@1.2.4": {
      "map": {
        "after": "npm:after@0.8.1",
        "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
        "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
        "blob": "npm:blob@0.0.4",
        "has-binary": "npm:has-binary@0.1.6",
        "utf8": "npm:utf8@2.1.0"
      }
    },
    "npm:engine.io@1.6.9": {
      "map": {
        "accepts": "npm:accepts@1.3.1",
        "base64id": "npm:base64id@0.1.0",
        "debug": "npm:debug@2.2.0",
        "engine.io-parser": "npm:engine.io-parser@1.2.4",
        "ws": "npm:ws@1.0.1"
      }
    },
    "npm:env-variable@0.0.3": {
      "map": {}
    },
    "npm:etag@1.7.0": {
      "map": {}
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:express@4.13.4": {
      "map": {
        "accepts": "npm:accepts@1.2.13",
        "array-flatten": "npm:array-flatten@1.1.1",
        "content-disposition": "npm:content-disposition@0.5.1",
        "content-type": "npm:content-type@1.0.2",
        "cookie": "npm:cookie@0.1.5",
        "cookie-signature": "npm:cookie-signature@1.0.6",
        "debug": "npm:debug@2.2.0",
        "depd": "npm:depd@1.1.0",
        "escape-html": "npm:escape-html@1.0.3",
        "etag": "npm:etag@1.7.0",
        "finalhandler": "npm:finalhandler@0.4.1",
        "fresh": "npm:fresh@0.3.0",
        "merge-descriptors": "npm:merge-descriptors@1.0.1",
        "methods": "npm:methods@1.1.2",
        "on-finished": "npm:on-finished@2.3.0",
        "parseurl": "npm:parseurl@1.3.1",
        "path-to-regexp": "npm:path-to-regexp@0.1.7",
        "proxy-addr": "npm:proxy-addr@1.0.10",
        "qs": "npm:qs@4.0.0",
        "range-parser": "npm:range-parser@1.0.3",
        "send": "npm:send@0.13.1",
        "serve-static": "npm:serve-static@1.10.2",
        "type-is": "npm:type-is@1.6.12",
        "utils-merge": "npm:utils-merge@1.0.0",
        "vary": "npm:vary@1.0.1"
      }
    },
    "npm:feathers-authentication@0.7.7": {
      "map": {
        "bcryptjs": "npm:bcryptjs@2.3.0",
        "debug": "npm:debug@2.2.0",
        "feathers-errors": "npm:feathers-errors@2.1.0",
        "feathers-hooks": "npm:feathers-hooks@1.5.3",
        "jsonwebtoken": "npm:jsonwebtoken@5.7.0",
        "lodash.isplainobject": "npm:lodash.isplainobject@4.0.4",
        "passport": "npm:passport@0.3.2",
        "passport-local": "npm:passport-local@1.0.0"
      }
    },
    "npm:feathers-client@1.2.0": {
      "map": {
        "feathers": "npm:feathers@2.0.1",
        "feathers-authentication": "npm:feathers-authentication@0.7.7",
        "feathers-hooks": "npm:feathers-hooks@1.5.3",
        "feathers-primus": "npm:feathers-primus@1.4.0",
        "feathers-rest": "npm:feathers-rest@1.3.0",
        "feathers-socketio": "npm:feathers-socketio@1.4.0"
      }
    },
    "npm:feathers-commons@0.7.3": {
      "map": {}
    },
    "npm:feathers-errors@2.1.0": {
      "map": {
        "debug": "npm:debug@2.2.0"
      }
    },
    "npm:feathers-hooks@1.5.3": {
      "map": {
        "feathers-commons": "npm:feathers-commons@0.7.3",
        "feathers-errors": "npm:feathers-errors@2.1.0"
      }
    },
    "npm:feathers-localstorage@0.4.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "feathers-memory": "npm:feathers-memory@0.7.1"
      }
    },
    "npm:feathers-memory@0.7.1": {
      "map": {
        "feathers-commons": "npm:feathers-commons@0.7.3",
        "feathers-errors": "npm:feathers-errors@2.1.0",
        "feathers-query-filters": "npm:feathers-query-filters@1.5.1",
        "uberproto": "npm:uberproto@1.2.0"
      }
    },
    "npm:feathers-primus@1.4.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "feathers-socket-commons": "npm:feathers-socket-commons@1.0.0",
        "primus": "npm:primus@5.2.1",
        "primus-emitter": "npm:primus-emitter@3.1.1",
        "uberproto": "npm:uberproto@1.2.0"
      }
    },
    "npm:feathers-rest@1.3.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "feathers-commons": "npm:feathers-commons@0.7.3",
        "feathers-errors": "npm:feathers-errors@2.1.0",
        "qs": "npm:qs@6.2.0"
      }
    },
    "npm:feathers-socket-commons@1.0.0": {
      "map": {
        "babel-polyfill": "npm:babel-polyfill@6.8.0",
        "debug": "npm:debug@2.2.0",
        "feathers-commons": "npm:feathers-commons@0.7.3"
      }
    },
    "npm:feathers-socketio@1.4.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "feathers-socket-commons": "npm:feathers-socket-commons@1.0.0",
        "socket.io": "npm:socket.io@1.4.6",
        "uberproto": "npm:uberproto@1.2.0"
      }
    },
    "npm:feathers@2.0.1": {
      "map": {
        "babel-polyfill": "npm:babel-polyfill@6.8.0",
        "debug": "npm:debug@2.2.0",
        "events": "npm:events@1.1.0",
        "express": "npm:express@4.13.4",
        "feathers-commons": "npm:feathers-commons@0.7.3",
        "rubberduck": "npm:rubberduck@1.1.0",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2",
        "uberproto": "npm:uberproto@1.2.0"
      }
    },
    "npm:finalhandler@0.4.1": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "escape-html": "npm:escape-html@1.0.3",
        "on-finished": "npm:on-finished@2.3.0",
        "unpipe": "npm:unpipe@1.0.0"
      }
    },
    "npm:forwarded-for@1.0.1": {
      "map": {}
    },
    "npm:fusing@1.0.0": {
      "map": {
        "emits": "npm:emits@3.0.0",
        "predefine": "npm:predefine@0.1.2"
      }
    },
    "npm:get-stdin@4.0.1": {
      "map": {}
    },
    "npm:has-binary@0.1.6": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:has-binary@0.1.7": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:http-errors@1.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "statuses": "npm:statuses@1.2.1"
      }
    },
    "npm:indent-string@1.2.2": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1",
        "minimist": "npm:minimist@1.2.0",
        "repeating": "npm:repeating@1.1.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:inherits@2.0.1": {
      "map": {}
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:jsonwebtoken@5.7.0": {
      "map": {
        "jws": "npm:jws@3.1.3",
        "ms": "npm:ms@0.7.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:jwa@1.1.3": {
      "map": {
        "base64url": "npm:base64url@1.0.6",
        "buffer-equal-constant-time": "npm:buffer-equal-constant-time@1.0.1",
        "ecdsa-sig-formatter": "npm:ecdsa-sig-formatter@1.0.5"
      }
    },
    "npm:jws@3.1.3": {
      "map": {
        "base64url": "npm:base64url@1.0.6",
        "jwa": "npm:jwa@1.1.3"
      }
    },
    "npm:kuler@0.0.0": {
      "map": {
        "colornames": "npm:colornames@0.0.2"
      }
    },
    "npm:load@1.0.2": {
      "map": {}
    },
    "npm:meow@2.0.0": {
      "map": {
        "camelcase-keys": "npm:camelcase-keys@1.0.0",
        "indent-string": "npm:indent-string@1.2.2",
        "minimist": "npm:minimist@1.2.0",
        "object-assign": "npm:object-assign@1.0.0"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:mime-db@1.23.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:mime-types@2.1.11": {
      "map": {
        "mime-db": "npm:mime-db@1.23.0"
      }
    },
    "npm:mime@1.3.4": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:nan@2.3.3": {
      "map": {}
    },
    "npm:on-finished@2.3.0": {
      "map": {
        "ee-first": "npm:ee-first@1.1.1"
      }
    },
    "npm:options@0.0.6": {
      "map": {}
    },
    "npm:pako@0.2.8": {
      "map": {}
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.6.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:parsejson@0.0.1": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:parseqs@0.0.2": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:parseuri@0.0.4": {
      "map": {
        "better-assert": "npm:better-assert@1.0.2"
      }
    },
    "npm:parseurl@1.3.1": {
      "map": {}
    },
    "npm:passport-local@1.0.0": {
      "map": {
        "passport-strategy": "npm:passport-strategy@1.0.0"
      }
    },
    "npm:passport@0.3.2": {
      "map": {
        "passport-strategy": "npm:passport-strategy@1.0.0",
        "pause": "npm:pause@0.0.1"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:predefine@0.1.2": {
      "map": {
        "extendible": "npm:extendible@0.1.1"
      }
    },
    "npm:primus@5.2.1": {
      "map": {
        "access-control": "npm:access-control@1.0.0",
        "asyncemit": "npm:asyncemit@3.0.1",
        "create-server": "npm:create-server@1.0.1",
        "diagnostics": "npm:diagnostics@1.0.1",
        "eventemitter3": "npm:eventemitter3@1.2.0",
        "forwarded-for": "npm:forwarded-for@1.0.1",
        "fusing": "npm:fusing@1.0.0",
        "load": "npm:load@1.0.2",
        "setheader": "npm:setheader@0.0.4",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2",
        "ultron": "npm:ultron@1.0.2",
        "yeast": "npm:yeast@0.1.2"
      }
    },
    "npm:process-nextick-args@1.0.7": {
      "map": {}
    },
    "npm:proxy-addr@1.0.10": {
      "map": {
        "forwarded": "npm:forwarded@0.1.0",
        "ipaddr.js": "npm:ipaddr.js@1.0.5"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:punycode@1.3.2": {
      "map": {}
    },
    "npm:randombytes@2.0.3": {
      "map": {}
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.1.2": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:ripemd160@1.0.1": {
      "map": {}
    },
    "npm:rubberduck@1.1.0": {
      "map": {}
    },
    "npm:rxjs@5.0.0-beta.6": {
      "map": {}
    },
    "npm:rxjs@5.0.0-beta.7": {
      "map": {
        "symbol-observable": "npm:symbol-observable@0.2.4"
      }
    },
    "npm:send@0.13.1": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "depd": "npm:depd@1.1.0",
        "destroy": "npm:destroy@1.0.4",
        "escape-html": "npm:escape-html@1.0.3",
        "etag": "npm:etag@1.7.0",
        "fresh": "npm:fresh@0.3.0",
        "http-errors": "npm:http-errors@1.3.1",
        "mime": "npm:mime@1.3.4",
        "ms": "npm:ms@0.7.1",
        "on-finished": "npm:on-finished@2.3.0",
        "range-parser": "npm:range-parser@1.0.3",
        "statuses": "npm:statuses@1.2.1"
      }
    },
    "npm:serve-static@1.10.2": {
      "map": {
        "escape-html": "npm:escape-html@1.0.3",
        "parseurl": "npm:parseurl@1.3.1",
        "send": "npm:send@0.13.1"
      }
    },
    "npm:setheader@0.0.4": {
      "map": {
        "debug": "npm:debug@0.7.4"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:socket.io-adapter@0.4.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "socket.io-parser": "npm:socket.io-parser@2.2.2"
      }
    },
    "npm:socket.io-client@1.4.6": {
      "map": {
        "backo2": "npm:backo2@1.0.2",
        "component-bind": "npm:component-bind@1.0.0",
        "component-emitter": "npm:component-emitter@1.2.0",
        "debug": "npm:debug@2.2.0",
        "engine.io-client": "npm:engine.io-client@1.6.9",
        "has-binary": "npm:has-binary@0.1.7",
        "indexof": "npm:indexof@0.0.1",
        "object-component": "npm:object-component@0.0.3",
        "parseuri": "npm:parseuri@0.0.4",
        "socket.io-parser": "npm:socket.io-parser@2.2.6",
        "to-array": "npm:to-array@0.1.4"
      }
    },
    "npm:socket.io-parser@2.2.2": {
      "map": {
        "benchmark": "npm:benchmark@1.0.0",
        "component-emitter": "npm:component-emitter@1.1.2",
        "debug": "npm:debug@0.7.4",
        "isarray": "npm:isarray@0.0.1",
        "json3": "npm:json3@3.2.6"
      }
    },
    "npm:socket.io-parser@2.2.6": {
      "map": {
        "benchmark": "npm:benchmark@1.0.0",
        "component-emitter": "npm:component-emitter@1.1.2",
        "debug": "npm:debug@2.2.0",
        "isarray": "npm:isarray@0.0.1",
        "json3": "npm:json3@3.3.2"
      }
    },
    "npm:socket.io@1.4.6": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "engine.io": "npm:engine.io@1.6.9",
        "has-binary": "npm:has-binary@0.1.7",
        "socket.io-adapter": "npm:socket.io-adapter@0.4.0",
        "socket.io-client": "npm:socket.io-client@1.4.6",
        "socket.io-parser": "npm:socket.io-parser@2.2.6"
      }
    },
    "npm:statuses@1.2.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.2"
      }
    },
    "npm:stream-http@2.3.0": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.2",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:type-is@1.6.12": {
      "map": {
        "media-typer": "npm:media-typer@0.3.0",
        "mime-types": "npm:mime-types@2.1.11"
      }
    },
    "npm:typescript@1.8.10": {
      "map": {}
    },
    "npm:uberproto@1.2.0": {
      "map": {}
    },
    "npm:ultron@1.0.2": {
      "map": {}
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:utf-8-validate@1.2.1": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.3.3"
      }
    },
    "npm:utf8@2.1.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:util-deprecate@1.0.2": {
      "map": {}
    },
    "npm:ws@1.0.1": {
      "map": {
        "bufferutil": "npm:bufferutil@1.2.1",
        "options": "npm:options@0.0.6",
        "ultron": "npm:ultron@1.0.2",
        "utf-8-validate": "npm:utf-8-validate@1.2.1"
      }
    },
    "npm:zone.js@0.6.12": {
      "map": {}
    }
  }
});
