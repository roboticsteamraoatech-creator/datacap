"use client";

import React from "react";
import { useRouter } from "next/navigation";

const OneTimeCodeRedirectPage = () => {
  const router = useRouter();

  // Redirect to users page since this route shouldn't be accessed directly
  React.useEffect(() => {
    router.push("/admin/users");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  );
};

export default OneTimeCodeRedirectPage;