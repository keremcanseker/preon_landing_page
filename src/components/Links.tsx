const Links = () => {
  return (
    <footer className="flex py-8">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 justify-around gap-4 sm:grid-cols-2 md:grid-cols-4">
          {/* Column 1 */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-4">Recourses</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline font-extralight text-gray-200"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline font-extralight text-gray-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline font-extralight text-gray-200"
                >
                  Guide Book
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline font-extralight text-gray-200"
                >
                  App Directory
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-4">Sebora</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline font-extralight text-gray-200"
                >
                  Our Collection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline font-extralight text-gray-200"
                >
                  {" "}
                  Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline font-extralight text-gray-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline font-extralight text-gray-200"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline font-extralight text-gray-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline font-extralight text-gray-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline font-extralight text-gray-200"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline font-extralight text-gray-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline font-extralight text-gray-200"
                >
                  Feel free to get in touch
                </a>
              </li>
              <li>
                <a
                  href="mailto:keremcanseker1@gmail.com"
                  className="hover:underline font-semibold text-darkslateblue"
                >
                  keremcanseker1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-2 border-gray-200 text-gray-200 "></hr>
    </footer>
  );
};

export default Links;
