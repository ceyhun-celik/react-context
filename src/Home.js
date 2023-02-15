import Header from "./Header";
import Footer from "./Footer";
import { useAuth } from "./context";


export default function Home() {

    const { user } = useAuth()

    return (
        <>
            <Header />
            <hr />
            <hr />
            <hr />
            App
            {user && (
                <div>
                    Bu alan sadece giriş yapılınca görülür
                </div>
            )}
            <hr />
            <hr />
            <hr />
            <Footer />
        </>
    )
}