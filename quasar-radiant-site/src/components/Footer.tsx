import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-20 px-6 bg-indigo-600 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 italic tracking-tight">
            Enter your new home on the internet
          </h2>
        </div>
        
        {/* Commented out sections
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-6">Product</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-indigo-200 hover:text-white">Download</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-white">Features</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-white">Security</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-white">Roadmap</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-indigo-200 hover:text-white">About Us</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-white">Careers</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-white">Contact</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-6">Support</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-indigo-200 hover:text-white">Help Center</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-white">Community</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-white">Status</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-indigo-200 hover:text-white">Privacy</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-white">Terms</Link></li>
              <li><Link href="#" className="text-indigo-200 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        */}
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-indigo-500">
          <p className="text-indigo-200 mb-4 md:mb-0">© {new Date().getFullYear()} The Browser Company. All rights reserved.</p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-indigo-200 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-indigo-200 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 