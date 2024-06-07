import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import Modal from "./Modal";

const navigation = [
    { name: 'About', href: '/', current: true },
    { name: 'Integrations', href: '/#integrations', current: false },
    { name: 'Pricing', href: '/pricing', current: false },
]

export default function Menuu() {
    return (
        <header className="sticky top-0 z-20 transition-all is-active">
            <Disclosure as="nav">
                {({ open }) => (
                    <>
                        <div className="max-w-screen-xl mx-auto px-5 py-2 border-b bg-white/80 border-gray-200 backdrop-blur-lg">
                            <div className="flex flex-col md:flex-row justify-between items-center relative">
                                <div className="flex w-full md:w-auto items-center justify-between">
                                    <a href="/" className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo px-2 -ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="124" height="20" viewBox="0 0 124 20" fill="none">
                                            <path d="M104.34 20C103.983 20 103.685 19.8887 103.447 19.6662C103.209 19.432 103.09 19.1392 103.09 18.7878C103.09 18.4481 103.209 18.1612 103.447 17.9269C103.697 17.681 103.995 17.558 104.34 17.558C104.685 17.558 104.983 17.681 105.233 17.9269C105.483 18.1612 105.608 18.4481 105.608 18.7878C105.608 19.1274 105.483 19.4144 105.233 19.6486C104.983 19.8829 104.685 20 104.34 20Z" fill="black" />
                                            <path d="M110.168 20C109.751 19.9414 109.43 19.7833 109.204 19.5257C108.978 19.268 108.864 18.9576 108.864 18.5945C108.864 18.3252 108.924 18.0558 109.043 17.7864L113.257 8.00083C113.436 7.5909 113.751 7.38593 114.203 7.38593C114.644 7.38593 114.947 7.5909 115.114 8.00083L119.328 17.7864C119.447 18.0558 119.507 18.3252 119.507 18.5945C119.507 18.9576 119.394 19.268 119.167 19.5257C118.941 19.7833 118.62 19.9414 118.203 20L116.685 16.4336H111.704L110.168 20ZM116.096 14.8173L113.9 9.38873L113.739 9.459L114.096 10.355L112.275 14.8173H116.096Z" fill="black" />
                                            <path d="M122.732 9.74009C122.375 9.74009 122.072 9.62883 121.822 9.40629C121.572 9.18376 121.447 8.90267 121.447 8.56301C121.447 8.22336 121.572 7.94227 121.822 7.71973C122.072 7.4972 122.375 7.38593 122.732 7.38593C123.089 7.38593 123.387 7.4972 123.625 7.71973C123.875 7.94227 124 8.22336 124 8.56301C124 8.90267 123.875 9.18376 123.625 9.40629C123.387 9.62883 123.089 9.74009 122.732 9.74009ZM121.839 12.0942C121.839 11.6726 121.982 11.3681 122.268 11.1807C122.566 10.9933 123.012 10.8996 123.607 10.8996V18.8054C123.607 19.2153 123.458 19.5198 123.161 19.7189C122.875 19.9063 122.435 20 121.839 20V12.0942Z" fill="black" />
                                            <path d="M26.3353 19.9008C24.8549 19.9008 23.5261 19.5963 22.3489 18.9873C21.1717 18.3599 20.2442 17.5018 19.5664 16.413C18.9064 15.3242 18.5764 14.097 18.5764 12.7314V2.57249C18.5764 1.74206 18.844 1.11462 19.3791 0.69018C19.932 0.247285 20.7347 0.0258368 21.787 0.0258368V12.7314C21.787 14.0232 22.1973 15.0566 23.0177 15.8317C23.8561 16.5883 24.9619 16.9666 26.3353 16.9666C27.6909 16.9666 28.7789 16.5791 29.5994 15.804C30.4377 15.0289 30.8569 14.0047 30.8569 12.7314V2.57249C30.8569 1.74206 31.1244 1.11462 31.6595 0.69018C32.2125 0.247285 33.0151 0.0258368 34.0675 0.0258368V12.7314C34.0675 14.097 33.7286 15.3242 33.0508 16.413C32.3908 17.5018 31.4722 18.3599 30.295 18.9873C29.1178 19.5963 27.7979 19.9008 26.3353 19.9008Z" fill="black" />
                                            <path d="M41.3799 3.98422C40.8626 3.98422 40.4345 3.83659 40.0957 3.54132C39.7746 3.22761 39.6141 2.83084 39.6141 2.35104C39.6141 1.72361 39.8549 1.17921 40.3364 0.717863C40.818 0.256512 41.3977 0.0258368 42.0755 0.0258368C42.5928 0.0258368 43.0119 0.182696 43.333 0.496414C43.654 0.791678 43.8146 1.16998 43.8146 1.63134C43.8146 2.25877 43.5738 2.81239 43.0922 3.2922C42.6106 3.75354 42.0398 3.98422 41.3799 3.98422ZM39.2662 7.55507C39.3911 6.87227 39.7211 6.37401 40.2562 6.06029C40.7913 5.72812 41.5672 5.56204 42.5838 5.56204L40.497 17.9078C40.3721 18.5906 40.0421 19.098 39.507 19.4302C38.9719 19.7439 38.1871 19.9008 37.1526 19.9008L39.2662 7.55507Z" fill="black" />
                                            <path d="M48.3167 19.6517C47.8529 19.6517 47.4605 19.504 47.1395 19.2088C46.8363 18.9135 46.6847 18.5444 46.6847 18.1015V1.79742C46.6847 1.37298 46.8363 1.01313 47.1395 0.717863C47.4605 0.422598 47.8529 0.274966 48.3167 0.274966H54.3633C55.9151 0.274966 57.2885 0.579457 58.4835 1.18844C59.6964 1.79742 60.6328 2.65553 61.2928 3.76277C61.9527 4.87001 62.2827 6.14334 62.2827 7.58275V12.2608C62.2827 13.7002 61.9438 14.9828 61.266 16.1085C60.6061 17.2157 59.6696 18.0831 58.4568 18.7105C57.2617 19.3379 55.8972 19.6517 54.3633 19.6517H48.3167ZM54.0957 16.7728C55.6832 16.7728 56.905 16.3853 57.7611 15.6102C58.6351 14.8352 59.0721 13.7372 59.0721 12.3162V7.55507C59.0721 6.13411 58.644 5.04533 57.7879 4.28871C56.9317 3.5321 55.701 3.15379 54.0957 3.15379H49.8952V16.7728H54.0957Z" fill="black" />
                                            <path d="M65.7966 1.79742C65.7966 1.37298 65.9482 1.01313 66.2514 0.717863C66.5724 0.422598 66.9649 0.274966 67.4286 0.274966H79.3345C79.3345 1.27148 79.1561 2.00041 78.7994 2.46176C78.4605 2.92311 77.9076 3.15379 77.1406 3.15379H69.0071V8.44086H76.2577C76.2577 9.43738 76.0793 10.1663 75.7226 10.6277C75.3837 11.089 74.8397 11.3197 74.0906 11.3197H69.0071V16.7728H77.7025C78.4516 16.7728 78.9956 17.0035 79.3345 17.4649C79.6912 17.9262 79.8696 18.6551 79.8696 19.6517H67.4286C66.9649 19.6517 66.5724 19.504 66.2514 19.2088C65.9482 18.9135 65.7966 18.5444 65.7966 18.1015V1.79742Z" fill="black" />
                                            <path d="M3.0207 18.0084C3.0207 19.6864 0 19.6864 0 19.6864V6.43311L3.0207 10.4635V18.0084Z" fill="black" />
                                            <path d="M15.0998 1.85011C15.0998 0.232521 12.0791 0.232523 12.0791 0.232523V9.32672L15.0998 13.4604V1.85011Z" fill="black" />
                                            <path d="M13.0244 19.661C14.2849 19.661 15.1252 18.8343 15.1252 17.5942L2.10072 0.232523C0.840286 0.232523 0 1.05927 0 2.29939L13.0244 19.661Z" fill="black" />
                                            <path d="M87.5998 14.4939H94.8473L97.1581 19.8677C99.1538 19.661 99.6789 18.1109 99.1538 16.2507L92.8516 1.05925C92.2214 -0.387536 90.2257 -0.284185 89.8056 0.95591L93.902 11.6003H88.6502L89.8056 8.49998L88.125 4.88297L83.2934 16.4574C82.7682 18.5242 83.7135 19.7644 85.3941 19.8677L87.5998 14.4939Z" fill="black" />
                                        </svg>
                                    </a>
                                    <DisclosureButton className="block md:hidden hover:bg-black/5 rounded-full p-1">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 fill-gray-800">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 fill-gray-800">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                            </svg>
                                        )}
                                    </DisclosureButton>
                                </div>
                                <div className="hidden w-full md:w-auto mt-2 md:flex md:mt-0">
                                    <ul className="flex flex-col md:flex-row md:gap-3">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <a href={item.href} className="flex md:px-3 py-2 text-base text-gray-600 hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-offset-2 transition focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo rounded-full">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <div className="hidden md:flex items-center">
                                        <Modal className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo px-4 py-2 text-sm bg-indigo-600 text-white hover:bg-indigo-800 inline-flex items-center group gap-px">
                                            <span>Try for Free</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path>
                                            </svg>
                                        </Modal>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <DisclosurePanel className="md:hidden mt-3 mx-5">
                            <div className="p-5 rounded-2xl border bg-white/80 border-gray-200 backdrop-blur-lg">
                                <ul className="flex flex-col space-y-3">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="flex px-4 py-2 bg-black/5 hover:bg-black/90 hover:text-white  text-base rounded-xl">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </DisclosurePanel>
                    </>
                )}
            </Disclosure>
        </header>
    )
}