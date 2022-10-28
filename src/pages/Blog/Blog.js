import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 pt-10">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src="https://images.ctfassets.net/nx13ojx82pll/3RBnLglDRSINOaFVTi9JBc/f34059ea800139023042f75f4f2668a2/what-is-cors-social.png?w=1200&h=627&q=90&fm=png" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What is CORS</h3>
                        <span className="text-xs dark:text-gray-400">October 28, 2022</span>
                        <p>CORS (Cross-Origin Resource Sharing). For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. CORS is a part of HTTP that lets servers specify any other hosts from which a browser should permit loading of content.</p>
                    </div>
                </div>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                        <img className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://securityintelligence.com/wp-content/uploads/2018/10/si-advanced-authentication-feature.jpg" alt="" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Why are you using firebase? What other options do you have to implement authentication?</h3>
                            <span className="text-xs dark:text-gray-400">October 27, 2022</span>
                            <p>
                                Firebase Authentication provides backend services, easy-to-use SDKs. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                                <br /><br />
                                We can use other options to implement authentication like Okta, Auth0, Supabase, OneLogin, etc
                                Auth0
                            </p>
                        </div>
                    </div>
                    <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                        <img className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://miro.medium.com/max/1400/1*ZgWgOXWVtGFCNpoRSjOdOg.jpeg" alt="" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How does the private route work?</h3>
                            <span className="text-xs dark:text-gray-400">October 26, 2022</span>
                            <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property</p>
                        </div>
                    </div>
                    <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                        <img className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/node-js-logo.png?fit=1200%2C600&ssl=1" alt="" />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What is Node? How does Node work?</h3>
                            <span className="text-xs dark:text-gray-400">October 25, 2022</span>
                            <p>
                                Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
                                <br /> <br />
                                Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
                </div>
            </div>
        </section>
    );
};

export default Blog;