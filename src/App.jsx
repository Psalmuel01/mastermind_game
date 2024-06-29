import { ConnectButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { chain, client, factoryAddress } from "./utils/const";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Game from "./components/Game";
import GamePlay from "./components/GamePlay";

const App = () => {
	// const account = useActiveAccount();
	// const wallets = [inAppWallet(), createWallet("io.metamask")]

	return (
		<div className="bg-[#0F1116]">
			<Navbar />
			<Routes>
				<Route path="/" exact element={<Hero />} />
				<Route path="/Game" exact element={<Game />} />
				<Route path="/GamePlay" exact element={<GamePlay />} />
			</Routes>
		</div>
	);
}

export default App;