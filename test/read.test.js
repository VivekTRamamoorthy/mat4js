import {read as matread} from "../lib/index.js"

import {readFile} from "node:fs/promises"

test("miINT8", async () => {
	const buffer = await readFile("test/data/int_vector.mat")
	const obj = matread(buffer.buffer)
	expect(obj).toEqual({
		"header": "MATLAB 5.0 MAT-file, Platform: GLNXA64, Created on: Fri Jul 31 15:33:27 2020                                        ",
		"data": {
			"a": [
				1,
				2,
				3,
				4,
			],
		},
	})
})

test("miINT8", async () => {
	const buffer = await readFile("test/data/number.mat")
	const obj = matread(buffer.buffer)
	expect(obj.data).toEqual({
			"A": [10],
	})
})
test("miINT8", async () => {
	const buffer = await readFile("test/data/char.mat")
	const obj = matread(buffer.buffer)
	expect(obj.data).toEqual({"char1":"helloworld","char2":[["h","e","l","l","o"],["w","o","r","l","d"]],"char3":"hello"})
})


