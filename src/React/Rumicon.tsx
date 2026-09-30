export const Rumicon = () => {
	return (
		<>
			<svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
				{/* <!-- невидимые рёбра --> */}
				<line x1="100" y1="320" x2="160" y2="260" stroke="black" strokeDasharray="4 4" />
				<line x1="160" y1="260" x2="380" y2="260" stroke="black" strokeDasharray="4 4" />
				<line x1="160" y1="260" x2="160" y2="120" stroke="black" strokeDasharray="4 4" />

				{/* <!-- видимые рёбра --> */}
				<line x1="100" y1="320" x2="320" y2="320" stroke="black" />
				<line x1="320" y1="320" x2="380" y2="260" stroke="black" />
				<line x1="380" y1="260" x2="380" y2="120" stroke="black" />
				<line x1="380" y1="120" x2="320" y2="180" stroke="black" />
				<line x1="320" y1="180" x2="320" y2="320" stroke="black" />
				<line x1="320" y1="180" x2="100" y2="180" stroke="black" />
				<line x1="100" y1="180" x2="100" y2="320" stroke="black" />
				<line x1="100" y1="180" x2="160" y2="120" stroke="black" />
				<line x1="160" y1="120" x2="380" y2="120" stroke="black" />

				{/* <!-- вспомогательные линии --> */}
				<line x1="160" y1="84" x2="483" y2="260" stroke="blue" strokeDasharray="5 5" strokeWidth="1.5" />
				<line x1="85.5" y1="334.5" x2="483" y2="260" stroke="blue" strokeDasharray="5 5" strokeWidth="1.5" />
				<line x1="160" y1="84" x2="85.5" y2="334.5" stroke="blue" strokeDasharray="5 5" strokeWidth="1.5" />

				{/* <!-- сечение --> */}
				<polygon
					points="155,320 357,283 380,204 226,120 145,135 100,286"
					fill="rgba(255,0,0,0.12)"
					stroke="red"
					strokeWidth="2.5"
				/>

				{/* <!-- точки сечения --> */}
				<circle cx="155" cy="320" r="3.5" fill="red" />
				<text x="140" y="340" fill="red" fontSize="14">
					T
				</text>

				<circle cx="357" cy="283" r="3.5" fill="red" />
				<text x="362" y="295" fill="red" fontSize="14">
					R
				</text>

				<circle cx="380" cy="204" r="3.5" fill="red" />
				<text x="388" y="210" fill="red" fontSize="14">
					Q
				</text>

				<circle cx="226" cy="120" r="3.5" fill="red" />
				<text x="220" y="110" fill="red" fontSize="14">
					P
				</text>

				<circle cx="145" cy="135" r="3.5" fill="red" />
				<text x="130" y="130" fill="red" fontSize="14">
					S
				</text>

				<circle cx="100" cy="286" r="3.5" fill="red" />
				<text x="80" y="295" fill="red" fontSize="14">
					U
				</text>

				{/* <!-- вспомогательные точки --> */}
				<circle cx="160" cy="84" r="3.5" fill="blue" />
				<text x="165" y="78" fill="blue" fontSize="14">
					X
				</text>

				<circle cx="483" cy="260" r="3.5" fill="blue" />
				<text x="490" y="255" fill="blue" fontSize="14">
					Y
				</text>

				<circle cx="85.5" cy="334.5" r="3.5" fill="blue" />
				<text x="70" y="345" fill="blue" fontSize="14">
					Z
				</text>

				{/* <!-- подписи вершин --> */}
				<text x="85" y="335" fontSize="14">
					A
				</text>
				<text x="150" y="255" fontSize="14">
					B
				</text>
				<text x="385" y="270" fontSize="14">
					C
				</text>
				<text x="325" y="340" fontSize="14">
					D
				</text>
				<text x="80" y="175" fontSize="14">
					A₁
				</text>
				<text x="145" y="115" fontSize="14">
					B₁
				</text>
				<text x="385" y="115" fontSize="14">
					C₁
				</text>
				<text x="325" y="175" fontSize="14">
					D₁
				</text>
			</svg>
			<svg width="600" height="550" viewBox="0 0 600 550" xmlns="http://www.w3.org/2000/svg">
				{/* <!-- Плоскость ACD1, продолженная до параллелограмма --> */}
				<polygon points="40,520 460,430 550,130 130,220" fill="rgba(255,0,0,0.10)" stroke="red" strokeWidth="1.5" />

				{/* <!-- Невидимые рёбра куба --> */}
				<line x1="100" y1="320" x2="160" y2="260" stroke="black" strokeDasharray="4 4" />
				<line x1="160" y1="260" x2="380" y2="260" stroke="black" strokeDasharray="4 4" />
				<line x1="160" y1="260" x2="160" y2="120" stroke="black" strokeDasharray="4 4" />

				{/* <!-- Треугольник ACD1 (сама секущая плоскость) --> */}
				<polygon points="100,320 380,260 160,120" fill="rgba(255,0,0,0.18)" stroke="red" strokeWidth="2.5" />

				{/* <!-- Видимые рёбра куба --> */}
				{/* <!-- A-B --> */}
				<line x1="100" y1="320" x2="320" y2="320" stroke="black" />
				{/* <!-- B-C --> */}
				<line x1="320" y1="320" x2="380" y2="260" stroke="black" />
				{/* <!-- C-C1 --> */}
				<line x1="380" y1="260" x2="380" y2="120" stroke="black" />
				{/* <!-- C1-D1 --> */}
				<line x1="380" y1="120" x2="160" y2="120" stroke="black" />
				{/* <!-- D1-A1 --> */}
				<line x1="160" y1="120" x2="100" y2="180" stroke="black" />
				{/* <!-- A1-A --> */}
				<line x1="100" y1="180" x2="100" y2="320" stroke="black" />
				{/* <!-- A1-B1 --> */}
				<line x1="100" y1="180" x2="320" y2="180" stroke="black" />
				{/* <!-- B1-C1 --> */}
				<line x1="320" y1="180" x2="380" y2="120" stroke="black" />
				{/* <!-- B1-B --> */}
				<line x1="320" y1="180" x2="320" y2="320" stroke="black" />

				{/* <!-- Перпендикуляр BH --> */}
				<line x1="320" y1="320" x2="266.7" y2="346.7" stroke="blue" strokeWidth="3" strokeDasharray="7 5" />
				<circle cx="266.7" cy="346.7" r="5" fill="blue" />
				<text x="246" y="368" fill="blue" fontSize="16">
					H
				</text>
				<text x="288" y="338" fill="blue" fontSize="16">
					h
				</text>

				{/* <!-- Подписи вершин куба --> */}
				<text x="82" y="338" fontSize="15">
					A
				</text>
				<text x="325" y="338" fontSize="15">
					B
				</text>
				<text x="388" y="272" fontSize="15">
					C
				</text>
				<text x="142" y="258" fontSize="15">
					D
				</text>
				<text x="78" y="178" fontSize="15">
					A₁
				</text>
				<text x="325" y="178" fontSize="15">
					B₁
				</text>
				<text x="388" y="118" fontSize="15">
					C₁
				</text>
				<text x="142" y="118" fontSize="15">
					D₁
				</text>
			</svg>
			<svg width="600" height="500" viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg">
				{/* <!-- Расширенная плоскость: четырёхугольник A-D1-C-H --> */}
				<polygon
					points="100,320 160,120 380,260 266.7,346.7"
					fill="rgba(255,0,0,0.10)"
					stroke="red"
					strokeWidth="1.5"
				/>
				{/* <!-- Треугольник ACD1 (сама секущая плоскость) --> */}
				<polygon points="100,320 380,260 160,120" fill="rgba(255,0,0,0.20)" stroke="red" strokeWidth="2.5" />

				{/* <!-- Невидимые рёбра куба --> */}
				<line x1="100" y1="320" x2="160" y2="260" stroke="black" strokeDasharray="4 4" />
				<line x1="160" y1="260" x2="380" y2="260" stroke="black" strokeDasharray="4 4" />
				<line x1="160" y1="260" x2="160" y2="120" stroke="black" strokeDasharray="4 4" />

				{/* <!-- Видимые рёбра куба --> */}
				<line x1="100" y1="320" x2="320" y2="320" stroke="black" />
				<line x1="320" y1="320" x2="380" y2="260" stroke="black" />
				<line x1="380" y1="260" x2="380" y2="120" stroke="black" />
				<line x1="380" y1="120" x2="160" y2="120" stroke="black" />
				<line x1="160" y1="120" x2="100" y2="180" stroke="black" />
				<line x1="100" y1="180" x2="100" y2="320" stroke="black" />
				<line x1="100" y1="180" x2="320" y2="180" stroke="black" />
				<line x1="320" y1="180" x2="380" y2="120" stroke="black" />
				<line x1="320" y1="180" x2="320" y2="320" stroke="black" />

				{/* <!-- Перпендикуляр BH --> */}
				<line x1="320" y1="320" x2="266.7" y2="346.7" stroke="blue" strokeWidth="3" strokeDasharray="7 5" />
				<circle cx="266.7" cy="346.7" r="5" fill="blue" />
				<text x="246" y="368" fill="blue" fontSize="16">
					H
				</text>
				<text x="288" y="338" fill="blue" fontSize="16">
					h
				</text>

				{/* <!-- Подписи вершин --> */}
				<text x="82" y="338" fontSize="15">
					A
				</text>
				<text x="325" y="338" fontSize="15">
					B
				</text>
				<text x="388" y="272" fontSize="15">
					C
				</text>
				<text x="142" y="258" fontSize="15">
					D
				</text>
				<text x="78" y="178" fontSize="15">
					A₁
				</text>
				<text x="325" y="178" fontSize="15">
					B₁
				</text>
				<text x="388" y="118" fontSize="15">
					C₁
				</text>
				<text x="142" y="118" fontSize="15">
					D₁
				</text>
			</svg>
			<svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
				{/* <!-- поле --> */}
				<rect x="100" y="100" width="320" height="320" fill="#f9f9f9" stroke="#333" strokeWidth="3" />

				{/* <!-- сетка --> */}
				<line x1="180" y1="100" x2="180" y2="420" stroke="#333" strokeWidth="1.5" />
				<line x1="260" y1="100" x2="260" y2="420" stroke="#333" strokeWidth="1.5" />
				<line x1="340" y1="100" x2="340" y2="420" stroke="#333" strokeWidth="1.5" />
				<line x1="100" y1="180" x2="420" y2="180" stroke="#333" strokeWidth="1.5" />
				<line x1="100" y1="260" x2="420" y2="260" stroke="#333" strokeWidth="1.5" />
				<line x1="100" y1="340" x2="420" y2="340" stroke="#333" strokeWidth="1.5" />

				{/* <!-- подписи столбцов --> */}
				<text x="140" y="450" textAnchor="middle" fontSize="18">
					A
				</text>
				<text x="220" y="450" textAnchor="middle" fontSize="18">
					Б
				</text>
				<text x="300" y="450" textAnchor="middle" fontSize="18">
					В
				</text>
				<text x="380" y="450" textAnchor="middle" fontSize="18">
					Г
				</text>

				{/* <!-- подписи строк --> */}
				<text x="80" y="145" textAnchor="middle" fontSize="18">
					4
				</text>
				<text x="80" y="225" textAnchor="middle" fontSize="18">
					3
				</text>
				<text x="80" y="305" textAnchor="middle" fontSize="18">
					2
				</text>
				<text x="80" y="385" textAnchor="middle" fontSize="18">
					1
				</text>

				{/* <!-- исходные фишки --> */}
				<circle cx="220" cy="140" r="22" fill="#1f77b4" />
				<circle cx="300" cy="140" r="22" fill="#1f77b4" />
				<circle cx="140" cy="220" r="22" fill="#ffd700" />
				<circle cx="140" cy="300" r="22" fill="#ffd700" />
				<circle cx="380" cy="220" r="22" fill="#ff4d4d" />
				<circle cx="380" cy="300" r="22" fill="#ff4d4d" />
				<circle cx="220" cy="380" r="22" fill="#2ecc71" />
				<circle cx="300" cy="380" r="22" fill="#2ecc71" />

				{/* <!-- перемещение жёлтой A2 -> В2 --> */}
				<defs>
					<marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
						<path d="M0,0 L0,6 L9,3 z" fill="blue" />
					</marker>
				</defs>
				<line x1="140" y1="300" x2="300" y2="300" stroke="blue" strokeWidth="3" markerEnd="url(#arrow)" />
				<text x="220" y="290" textAnchor="middle" fontSize="16" fill="blue">
					A2 → В2
				</text>

				{/* <!-- новая жёлтая на В2 --> */}
				<circle cx="300" cy="300" r="22" fill="#ffd700" stroke="blue" strokeWidth="3" strokeDasharray="4 4" />

				{/* <!-- выделение трёх фишек варианта 3 --> */}
				<rect x="280" y="280" width="40" height="40" fill="none" stroke="red" strokeWidth="3" />
				<rect x="280" y="360" width="40" height="40" fill="none" stroke="red" strokeWidth="3" />
				<rect x="360" y="200" width="40" height="40" fill="none" stroke="red" strokeWidth="3" />

				{/* <!-- подпись --> */}
				<text x="250" y="480" textAnchor="middle" fontSize="20" fill="red">
					Вариант 3
				</text>
			</svg>
		</>
	);
};
