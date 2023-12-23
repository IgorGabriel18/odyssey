import { Footer, Navbar, PageContent, ScrollToTopButton } from "~components/ui";
import { GlobalStyles } from "~styles/global-styles";

export function App() {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <PageContent />
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
