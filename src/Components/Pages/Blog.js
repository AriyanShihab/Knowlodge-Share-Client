import React from "react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-900 px-5 py-10">
      <h2 className="text-3xl text-center font-bold text-[#f66962]">
        welcome to blog page
      </h2>
      <div className="md:w-3/4 mx-auto px-3 py-8  rounded">
        {/* 4.1 what is cors?

4.2 Why are you using firebase? What other options do you have to implement authentication?

4.3 How does the private route work?

4.4 What is Node? How does Node work? */}

        <div className="bg-slate-800 p-4 rounded m-2">
          <h2 className="text-2xl text-[#f66962] font-bold">what is cors?</h2>
          <p className="text-slate-100">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </div>

        <div className="bg-slate-800 p-4 rounded m-2 text-slate-100">
          <h2 className="text-2xl text-[#f66962] font-bold">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p className="text-slate-100">
            I'm Using Firebase becuase, <br></br>
            firebase is first enought to work with, it provide third perty login
            functionality as well. and its more secure, not only that, but also
            firebase proveide hosting and database for web app Here is list of
            some other Authentication options
          </p>
          <ul className="text-[#f66962] mt-1">
            <li className="ml-4">The Octa Identity Cloud</li>
            <li className="ml-4">watch Guard Auth Point</li>
            <li className="ml-4">Cisco Secure Access by Duo</li>
            <li className="ml-4">Azure Active Directory</li>
          </ul>
        </div>
        <div className="bg-slate-800 p-4 rounded m-2">
          <h2 className="text-2xl text-[#f66962] font-bold">
            How does the private route work?
          </h2>
          <p className="text-slate-100">
            The workflow of an oradaniry private route is pretty much simple. we
            check some logick before an user can get accsess of an route or not.
            if the answer is yes, then we rutuen the desired route that we get
            as children prop, and if the answer is no, we will redict user
            accourding to circumstanses
          </p>
        </div>
        <div className="bg-slate-800 p-4 rounded m-2">
          <h2 className="text-2xl text-[#f66962] font-bold">
            What is Node? How does Node work?
          </h2>
          <p className="text-slate-100">
            Node is a JavaScript runtime. <br></br>
            Node.js accepts the request from the clients and sends the response,
            while working with the request node.js handles them with a single
            thread. To operate I/O operations or requests node.js use the
            concept of threads. Thread is a sequence of instructions that the
            server needs to perform. It runs parallel on the server to provide
            the information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
