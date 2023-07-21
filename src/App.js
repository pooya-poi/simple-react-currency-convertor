import { useState, useEffect } from "react";


export default function App() {
	const [amount, setAmount] = useState(1);
	const [fromCur, setFromCur] = useState("EUR");
	const [toCur, setToCur] = useState("USD");
	const [converted, setConverted] = useState("");
	const [currencies, setCurrencies] = useState([]);

	useEffect(() => {
		async function convert() {
			if (fromCur === toCur) {
				setConverted("")
				return;
			}
			const res = await fetch(
				`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
			);
			const data = await res.json();
			setConverted(data.rates[toCur]);
		}
		convert();
	}, [amount, fromCur, toCur]);

	useEffect(() => {

		async function fetchCurrencies() {

			const res = await fetch('https://api.frankfurter.app/currencies');
			const data = await res.json();
			const currencyOption = Object.entries(data).map(([code, name]) => ({ code, name }))

			setCurrencies(currencyOption)
		}
		fetchCurrencies()
	}, []);
	function handleSwap() {
		setFromCur(toCur);
		setToCur(fromCur);

	}
	return (
		<div className="App">
			<input
				type="text"
				value={amount}
				onChange={(e) => setAmount(Number(e.target.value))}
			/>
			<select value={fromCur} onChange={(e) => setFromCur(e.target.value)}>
				{currencies.map(currency => (
					<option key={currency.code} value={currency.code}>
						{currency.code} - {currency.name}
					</option>
				))}
				{/* <option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option> */}
			</select>
			<button onClick={handleSwap}>🔁</button>
			<select value={toCur} onChange={(e) => setToCur(e.target.value)}>
				{currencies.map(currency => (
					<option key={currency.code} value={currency.code}>
						{currency.code} - {currency.name}
					</option>
				))}
				{/* <option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option> */}
			</select>
			<div>{Number(converted).toFixed(2)} {toCur}</div>
		</div>
	);
}
