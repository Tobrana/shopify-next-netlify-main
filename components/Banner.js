import "tailwindcss/tailwind.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-gray-800 text-white p-4">
      <p className="text-center">
        Get 10% off your first purchase.{" "}
        <Link href="/shop">
          <a className="underline">Shop now</a>
        </Link>
      </p>
    </div>
  );
};

export default Banner;
