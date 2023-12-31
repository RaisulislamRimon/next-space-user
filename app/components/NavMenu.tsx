import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignOuButton } from "./buttons";

export default function NavMenu() {
  return (
    <nav>
      <div className="navbar bg-blue-700 text-white">
        <div className="flex-1">
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
          <Link href={"/"}>
            <Image
              src="https://i.ibb.co/drs3Dsc/Tt-GMr7-CQsgp-B673-XRRUUG.png"
              width={50}
              height={30}
              alt="next-space-user logo"
            />
          </Link>
        </div>
        <div className="flex-none">
          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="navbar-center hidden sm:flex"> */}
          <div className="navbar-center">
            <ul className="menu menu-horizontal px-1">
              <li className="hover:underline">
                <Link
                  href={"/about"}
                  className="hover:text-white hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary className="hover:text-white hover:bg-transparent">
                    Read
                  </summary>
                  <ul className="p-2">
                    <li className="hover:underline">
                      <Link href={"/blog"}>Blog</Link>
                    </li>
                    <li className="hover:underline">
                      <Link href={"/videos"}>Videos</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="hover:underline">
                <Link
                  href={"/users"}
                  className="hover:text-white hover:bg-transparent"
                >
                  Users
                </Link>
              </li>
            </ul>
          </div>

          <SignInButton />
          {/* <SignOuButton /> */}
        </div>
      </div>
    </nav>
  );
}
