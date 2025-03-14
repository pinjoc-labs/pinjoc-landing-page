"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { DotPattern } from "@/components/ui/dot-pattern";
import LogoTicker from "@/components/ui/logo-ticker";
import MarqueeVertical from "@/components/ui/marquee-vertical";
import { SpinningText } from "@/components/ui/spinning-text";
import { TextReveal } from "@/components/ui/text-reveal";
import { classMerge } from "@/util/class-merge";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import TextTop from "./_components/text-top";

const DEFI_PROBLEMS = [
	{
		title: "Variable Interest Rates 📉📈",
		description:
			"Interest rates in DeFi can fluctuate drastically depending on market supply and demand. This makes it difficult for both borrowers and lenders to predict their returns or borrowing costs with certainty.",
		color: "bg-gradient-to-br from-green-400 to-yellow-500",
	},
	{
		title: "No Fixed Loan Terms ⏳🔄",
		description:
			"Most DeFi loans do not have a set maturity date. Without a fixed duration, borrowers and lenders must continuously monitor their positions, increasing the risk of sudden liquidation.",
	},
	{
		title: "Utilization Based Rates 📊",
		description:
			"DeFi interest rates depend on the utilization of liquidity within the platform. When more people borrow, rates increase; when borrowing demand is low, rates decrease. This creates uncertainty in financial planning.",
	},
	{
		title: "TradFi Relies on Fixed Rates 🏦🔐",
		description:
			"Traditional finance (TradFi) offers fixed interest rates, providing more predictability and trust for investors and borrowers. However, DeFi has yet to offer similar stability, making it harder for mainstream adoption.",
	},
];

const DEFI_SOLUTIONS = [
	{
		title: "CLOB Matching🛡️",
		description:
			"CLOB Matching is a groundbreaking feature that allows borrowers and lenders to match their positions on the CLOB platform. By matching their positions, borrowers can borrow at a lower rate than traditional lending, while lenders can earn higher interest rates.",
	},
	{
		title: "Fixed Rate, Fixed Term🔒",
		description:
			"Fixed Rate, Fixed Term is a unique feature that allows borrowers and lenders to set their interest rates and loan terms in advance. This creates a more predictable and stable financial environment, making it easier for both borrowers and lenders to manage their positions.",
	},
	{
		title: "Market Based Rates📊",
		description:
			"Market Based Rates is a unique feature that allows borrowers and lenders to set their interest rates based on the market demand. This creates a more predictable and stable financial environment, making it easier for both borrowers and lenders to manage their positions.",
	},
	{
		title: "Auto-Roll Supply💵",
		description:
			"Auto-Roll Supply is a unique feature that allows borrowers and lenders to set their interest rates based on the market demand. This creates a more predictable and stable financial environment, making it easier for both borrowers and lenders to manage their positions.",
	},
	{
		title: "Tokenized Bond🔒",
		description:
			"Tokenized Bond is a unique feature that allows borrowers and lenders to set their interest rates based on the market demand. This creates a more predictable and stable financial environment, making it easier for both borrowers and lenders to manage their positions.",
	},
];

export default function Home() {
	const ref = useRef(null);

	return (
		<div className="w-full min-h-screen">
			{/* Hero Section */}
			<div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20 h-screen">
				<DotPattern
					width={20}
					height={20}
					cx={1}
					cy={1}
					cr={1}
					className={classMerge(
						"[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
					)}
				/>
				<div className="max-w-full w-full h-screen flex items-center justify-center">
					<div className="w-3/4 space-y-4">
						<TextTop label="Best DeFi CLOB in Indonesia" />
						<h1 className="text-7xl font-extrabold text-white text-center mt-8">
							A DeFi platform revolutionizing CLOB for borrowers and lenders.
						</h1>
						<span className="text-center text-white/50 block text-2xl">
							enabling seamless, transparent, and decentralized debt trading.
						</span>
						<div className="w-full flex items-center justify-center mt-10">
							<Link href={"https://pinjoc.vercel.app/"}>
								<Button className="text-lg py-6 px-5 rounded-full">
									Launch App
								</Button>
							</Link>
						</div>
					</div>
				</div>
				<SpinningText className="text-white absolute top-1/4 left-24">
					Etherium • Bitcoin • Chainlink •
				</SpinningText>
				<SpinningText className="text-white absolute bottom-1/6 right-24">
					Solana • Dogi • Pepe •
				</SpinningText>
			</div>
			{/* End Hero Section */}

			{/* Logo Ticker */}
			<LogoTicker />
			{/* End Logo Ticker */}

			{/* Introduction Pinjoc */}
			<TextReveal className="text-center">
				We are a team of developers and designers who are passionate about
				building the future of decentralized finance
			</TextReveal>
			{/* End Introduction Pinjoc */}

			{/* Section Problem */}
			<section
				ref={ref}
				className="w-full py-10 flex items-center justify-center"
			>
				<div className="container">
					<div className="w-full">
						<h1 className="text-white text-3xl text-center">
							DeFi Lending{" "}
							<span className="text-white px-3 py-1 bg-purple-700">
								Problem
							</span>
						</h1>
					</div>
					<div className="flex items-center justify-center gap-5 mt-10">
						{DEFI_PROBLEMS.map((item, index) => {
							return (
								<motion.div
									key={item.title}
									className="hover:bg-gray-950 p-5 bg-[#181818] border border-[#232323] rounded-xl w-72 h-64"
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.5, delay: index * 0.3 }}
								>
									<h1 className="text-white text-xl font-semibold">
										{item.title}
									</h1>
									<span className="text-gray-300 mt-2 text-justify block">
										{item.description}
									</span>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>
			{/* Section Problem */}

			{/* Section Solution */}
			<section className="h-screen flex items-center justify-center">
				<Container>
					<div className="w-full flex justify-between">
						<div className="space-y-4">
							<h1 className="text-5xl font-semibold text-white">
								We Deliver What <span className="text-purple-700">Matters</span>
							</h1>
							<span className="text-white/50 block text-xl">
								Just enjoyed to provide the best solutions for your needs.
							</span>
						</div>
						<div className="flex gap-5">
							<MarqueeVertical data={DEFI_SOLUTIONS} direction="bottom" />
							<MarqueeVertical data={DEFI_SOLUTIONS} direction="bottom" />
						</div>
					</div>
				</Container>
			</section>
			{/* End Section Solution */}
		</div>
	);
}
