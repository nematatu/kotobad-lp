import { AboutSections } from "./components/kotobad/AboutSections";
import { AppIntroSection } from "./components/kotobad/AppIntroSection";
import { FooterSection } from "./components/kotobad/FooterSection";
import { MvSection } from "./components/kotobad/MvSection";
import { ReviewSection } from "./components/kotobad/ReviewSection";

function App() {
	return (
		<div className="overflow-x-hidden bg-white text-[#008EDC] text-base font-medium leading-normal">
			<main>
				<MvSection />
				<AppIntroSection />
				<AboutSections />
				<ReviewSection />
			</main>
			<FooterSection />
		</div>
	);
}

export default App;
