// I want a date in a format of dd/mm/yyyy to be formatted as valid string
// I want a string of format dd/mm/yyyy to be formatted as valid date
import {dateToString, stringToDate} from "./date";

const dateAsString = "17/11/2021"
const dateAsDate = new Date(stringToDate("17/11/2021"))

describe("string to valid date", () => {
    it('should transform a string of type dd/mm/yyyy into a valid date', function () {
        const date = stringToDate(dateAsString)
        expect(JSON.stringify(date)).toEqual(JSON.stringify("2021-11-17T00:00:00.000Z"))
    });
})

describe("date to valid string", () => {
    it('should take a date and transform it to a valid string dd/mm/yyyy', function () {
        const date = dateToString(dateAsDate)
        expect(date).toEqual("17/11/2021")
    });
})

describe("date interpolation", () => {
    it('should transform today date into string and the same string into date and obtain the initial value', function () {
        const todayShouldBe = '17/11/2021'
        const todayDate = stringToDate(todayShouldBe)
        const todayIs = dateToString(todayDate)
        expect(todayIs).toEqual(todayShouldBe)
    });
})