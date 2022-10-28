import React from 'react';


const FAQ = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-2xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">Frequently asked questions about web development.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400">What is HTML?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            <li>HTML stands for Hyper Text Markup Language</li>
                            <li>HTML is the standard markup language for creating Web pages</li>
                            <li>HTML describes the structure of a Web page</li>
                            <li>HTML consists of a series of elements</li>
                            <li>HTML elements tell the browser how to display the content</li>
                            <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.</li>
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400">What is CSS?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            Cascading Style Sheets (CSS) is used to format the layout of a webpage.
                            <br /><br />
                            With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400">What is Javascript?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            JavaScript is a client-side scripting language as well as a server-side scripting language.
                            This scripting language can be written into HTML pages (also could use CSS for styling the pages), and web browsers understand the page.
                            <br /><br />
                            This scripting language also acts like an object-oriented programming language but not a class-based object-oriented language.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400">What is React Js?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            React is a declarative, efficient, and flexible JavaScript library for
                            building user interfaces or UI components. It lets you compose complex UIs
                            from small and isolated pieces of code called “components”.
                            <br /><br />
                            It is used by large, established companies and newly-minted startups
                            alike (Netflix, Airbnb, Instagram, and the New York Times, to name a few).
                            React brings many advantages to the table, making it a better choice
                            than other frameworks like Angular.js.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-blue-400">What is Node Js?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                            Node.js is an open-source, cross-platform,
                            back-end JavaScript runtime environment
                            that runs on the V8 engine and executes
                            JavaScript code outside a web browser.
                        </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;