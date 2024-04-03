import { useRouter } from "next/router";
import { useEffect } from "react";

function Dashboard() {
    const router = useRouter();
    useEffect(() => {
        router.replace("/dashboard/home");
    }, []);
}

export default Dashboard;
