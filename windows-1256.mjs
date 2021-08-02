/*! https://mths.be/windows-1256 v3.0.1 by @mathias | MIT license */

const stringFromCharCode = String.fromCharCode;

const INDEX_BY_CODE_POINT = new Map([
	[160, 32],
	[162, 34],
	[163, 35],
	[164, 36],
	[165, 37],
	[166, 38],
	[167, 39],
	[168, 40],
	[169, 41],
	[171, 43],
	[172, 44],
	[173, 45],
	[174, 46],
	[175, 47],
	[176, 48],
	[177, 49],
	[178, 50],
	[179, 51],
	[180, 52],
	[181, 53],
	[182, 54],
	[183, 55],
	[184, 56],
	[185, 57],
	[187, 59],
	[188, 60],
	[189, 61],
	[190, 62],
	[215, 87],
	[224, 96],
	[226, 98],
	[231, 103],
	[232, 104],
	[233, 105],
	[234, 106],
	[235, 107],
	[238, 110],
	[239, 111],
	[244, 116],
	[247, 119],
	[249, 121],
	[251, 123],
	[252, 124],
	[338, 12],
	[339, 28],
	[402, 3],
	[710, 8],
	[1548, 33],
	[1563, 58],
	[1567, 63],
	[1569, 65],
	[1570, 66],
	[1571, 67],
	[1572, 68],
	[1573, 69],
	[1574, 70],
	[1575, 71],
	[1576, 72],
	[1577, 73],
	[1578, 74],
	[1579, 75],
	[1580, 76],
	[1581, 77],
	[1582, 78],
	[1583, 79],
	[1584, 80],
	[1585, 81],
	[1586, 82],
	[1587, 83],
	[1588, 84],
	[1589, 85],
	[1590, 86],
	[1591, 88],
	[1592, 89],
	[1593, 90],
	[1594, 91],
	[1600, 92],
	[1601, 93],
	[1602, 94],
	[1603, 95],
	[1604, 97],
	[1605, 99],
	[1606, 100],
	[1607, 101],
	[1608, 102],
	[1609, 108],
	[1610, 109],
	[1611, 112],
	[1612, 113],
	[1613, 114],
	[1614, 115],
	[1615, 117],
	[1616, 118],
	[1617, 120],
	[1618, 122],
	[1657, 10],
	[1662, 1],
	[1670, 13],
	[1672, 15],
	[1681, 26],
	[1688, 14],
	[1705, 24],
	[1711, 16],
	[1722, 31],
	[1726, 42],
	[1729, 64],
	[1746, 127],
	[8204, 29],
	[8205, 30],
	[8206, 125],
	[8207, 126],
	[8211, 22],
	[8212, 23],
	[8216, 17],
	[8217, 18],
	[8218, 2],
	[8220, 19],
	[8221, 20],
	[8222, 4],
	[8224, 6],
	[8225, 7],
	[8226, 21],
	[8230, 5],
	[8240, 9],
	[8249, 11],
	[8250, 27],
	[8364, 0],
	[8482, 25]
]);
const INDEX_BY_POINTER = new Map([
	[0, '\u20AC'],
	[1, '\u067E'],
	[2, '\u201A'],
	[3, '\u0192'],
	[4, '\u201E'],
	[5, '\u2026'],
	[6, '\u2020'],
	[7, '\u2021'],
	[8, '\u02C6'],
	[9, '\u2030'],
	[10, '\u0679'],
	[11, '\u2039'],
	[12, '\u0152'],
	[13, '\u0686'],
	[14, '\u0698'],
	[15, '\u0688'],
	[16, '\u06AF'],
	[17, '\u2018'],
	[18, '\u2019'],
	[19, '\u201C'],
	[20, '\u201D'],
	[21, '\u2022'],
	[22, '\u2013'],
	[23, '\u2014'],
	[24, '\u06A9'],
	[25, '\u2122'],
	[26, '\u0691'],
	[27, '\u203A'],
	[28, '\u0153'],
	[29, '\u200C'],
	[30, '\u200D'],
	[31, '\u06BA'],
	[32, '\xA0'],
	[33, '\u060C'],
	[34, '\xA2'],
	[35, '\xA3'],
	[36, '\xA4'],
	[37, '\xA5'],
	[38, '\xA6'],
	[39, '\xA7'],
	[40, '\xA8'],
	[41, '\xA9'],
	[42, '\u06BE'],
	[43, '\xAB'],
	[44, '\xAC'],
	[45, '\xAD'],
	[46, '\xAE'],
	[47, '\xAF'],
	[48, '\xB0'],
	[49, '\xB1'],
	[50, '\xB2'],
	[51, '\xB3'],
	[52, '\xB4'],
	[53, '\xB5'],
	[54, '\xB6'],
	[55, '\xB7'],
	[56, '\xB8'],
	[57, '\xB9'],
	[58, '\u061B'],
	[59, '\xBB'],
	[60, '\xBC'],
	[61, '\xBD'],
	[62, '\xBE'],
	[63, '\u061F'],
	[64, '\u06C1'],
	[65, '\u0621'],
	[66, '\u0622'],
	[67, '\u0623'],
	[68, '\u0624'],
	[69, '\u0625'],
	[70, '\u0626'],
	[71, '\u0627'],
	[72, '\u0628'],
	[73, '\u0629'],
	[74, '\u062A'],
	[75, '\u062B'],
	[76, '\u062C'],
	[77, '\u062D'],
	[78, '\u062E'],
	[79, '\u062F'],
	[80, '\u0630'],
	[81, '\u0631'],
	[82, '\u0632'],
	[83, '\u0633'],
	[84, '\u0634'],
	[85, '\u0635'],
	[86, '\u0636'],
	[87, '\xD7'],
	[88, '\u0637'],
	[89, '\u0638'],
	[90, '\u0639'],
	[91, '\u063A'],
	[92, '\u0640'],
	[93, '\u0641'],
	[94, '\u0642'],
	[95, '\u0643'],
	[96, '\xE0'],
	[97, '\u0644'],
	[98, '\xE2'],
	[99, '\u0645'],
	[100, '\u0646'],
	[101, '\u0647'],
	[102, '\u0648'],
	[103, '\xE7'],
	[104, '\xE8'],
	[105, '\xE9'],
	[106, '\xEA'],
	[107, '\xEB'],
	[108, '\u0649'],
	[109, '\u064A'],
	[110, '\xEE'],
	[111, '\xEF'],
	[112, '\u064B'],
	[113, '\u064C'],
	[114, '\u064D'],
	[115, '\u064E'],
	[116, '\xF4'],
	[117, '\u064F'],
	[118, '\u0650'],
	[119, '\xF7'],
	[120, '\u0651'],
	[121, '\xF9'],
	[122, '\u0652'],
	[123, '\xFB'],
	[124, '\xFC'],
	[125, '\u200E'],
	[126, '\u200F'],
	[127, '\u06D2']
]);

// https://encoding.spec.whatwg.org/#error-mode
const decodingError = (mode) => {
	if (mode === 'replacement') {
		return '\uFFFD';
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

const encodingError = (mode) => {
	if (mode === 'replacement') {
		return 0xFFFD;
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

// https://encoding.spec.whatwg.org/#single-byte-decoder
export const decode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// “An error mode […] is either `replacement` (default) or `fatal` for a
	// decoder.”
	if (mode !== 'replacement' && mode !== 'fatal') {
		mode = 'replacement';
	}

	const length = input.length;

	// Support byte strings as input.
	if (typeof input === 'string') {
		const bytes = new Uint16Array(length);
		for (let index = 0; index < length; index++) {
			bytes[index] = input.charCodeAt(index);
		}
		input = bytes;
	}

	const buffer = [];
	for (let index = 0; index < length; index++) {
		const byteValue = input[index];
		// “If `byte` is an ASCII byte, return a code point whose value is
		// `byte`.”
		if (0x00 <= byteValue && byteValue <= 0x7F) {
			buffer.push(stringFromCharCode(byteValue));
			continue;
		}
		// “Let `code point` be the index code point for `byte − 0x80` in index
		// single-byte.”
		const pointer = byteValue - 0x80;
		if (INDEX_BY_POINTER.has(pointer)) {
			// “Return a code point whose value is `code point`.”
			buffer.push(INDEX_BY_POINTER.get(pointer));
		} else {
			// “If `code point` is `null`, return `error`.”
			buffer.push(decodingError(mode));
		}
	}
	const result = buffer.join('');
	return result;
};

// https://encoding.spec.whatwg.org/#single-byte-encoder
export const encode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// “An error mode […] is either `fatal` (default) or `HTML` for an
	// encoder.”
	if (mode !== 'fatal' && mode !== 'html') {
		mode = 'fatal';
	}
	const length = input.length;
	const result = new Uint16Array(length);
	for (let index = 0; index < length; index++) {
		const codePoint = input.charCodeAt(index);
		// “If `code point` is an ASCII code point, return a byte whose
		// value is `code point`.”
		if (0x00 <= codePoint && codePoint <= 0x7F) {
			result[index] = codePoint;
			continue;
		}
		// “Let `pointer` be the index pointer for `code point` in index
		// single-byte.”
		if (INDEX_BY_CODE_POINT.has(codePoint)) {
			const pointer = INDEX_BY_CODE_POINT.get(codePoint);
			// “Return a byte whose value is `pointer + 0x80`.”
			result[index] = pointer + 0x80;
		} else {
			// “If `pointer` is `null`, return `error` with `code point`.”
			result[index] = encodingError(mode);
		}
	}
	return result;
};

export const labels = [
	'cp1256',
	'windows-1256',
	'x-cp1256'
];
