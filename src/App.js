import React from "react";
import SiteSearchAPIConnector from "@elastic/search-ui-site-search-connector";
import { SearchProvider, SearchBox } from "@elastic/react-search-ui";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

const connector = new SiteSearchAPIConnector({
  engineKey: "zpAwGSb8YMXtF9yDeS5K", // public engine key
  engineName: "docs",
  documentType: ["page"]
});

export default function App() {
  return (
    <div>
      <SearchProvider
        config={{
          apiConnector: connector
        }}
      >
        <div className="App">
          <SearchBox
            autocompleteResults={{
              titleField: "title",
              urlField: "url"
            }}
          />
        </div>
      </SearchProvider>
      <p>Steps to reproduce:</p>
      <ol>
        <li>Search for "test"</li>
        <li>From the autocomplete results, click a document.</li>
        <li>
          You should see the error "search-ui-site-search-connector: Site Search
          does not support tags on autocompleteClick" logged to the console.
        </li>
      </ol>
    </div>
  );
}
