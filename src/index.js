import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { EditorProvider } from "./IntroirEditorBox/context";

//local API Url
export const APIBaseURL = "https://localhost:7176/";

// //live API Url
// export const APIBaseURL = "https://d2w-dev-web-app-api.azurewebsites.net/";

const url_string = window.location.href;
const url = new URL(url_string);
const ClientId = url.searchParams.get("ClientId");
const DesignerId = url.searchParams.get("DesignerId");

fetch(APIBaseURL + "api/clients/" + ClientId)
.then(res => {
    if(res.status !== "404")
    {
      fetch(APIBaseURL + "api/designers/" + DesignerId)
      .then(res1 => {
        if(res1.status !== "404")
        {
          ReactDOM.render(
            <EditorProvider>
              <App />
            </EditorProvider>,
            document.getElementById("root")
          );
        }
        else
        {
          ReactDOM.render(
            <>
            404 Not Found!
            </>,
            document.getElementById("root")
          );
        }
      });
    }
    else
    {
      ReactDOM.render(
        <>
        404 Not Found!
        </>,
        document.getElementById("root")
      );
    }
});


