var assert = require("assert");
var filename = require("../src/filename");

describe("Filename function", function () {

  it("should be defined", function () {
    assert.equal(typeof filename !== undefined, true);
  });

  it("should be return empty string", function () {

    assert.equal(
        filename(""),
        ""
    );

    assert.equal(
        filename("", 0),
        ""
    );

    assert.equal(
        filename("", 10),
        ""
    );

    assert.equal(
        filename("", 10000),
        ""
    );

    assert.equal(
        filename("", 0, "|"),
        ""
    );

    assert.equal(
        filename("", 10, "|"),
        ""
    );
  });

  it("should not split if file name length is lower that line length", function () {
    assert.equal(
        filename("abcde", 10, "+"),
        "abcde"
    );
    assert.equal(
        filename("abcde", 5, " "),
        "abcde"
    );
    assert.equal(
        filename("abcde.txt", 20, " "),
        "abcde.txt"
    );
    assert.equal(
        filename("abcde.jpeg", 20, " "),
        "abcde.jpeg"
    );
  });

  it("should not split file extension", function () {
    assert.equal(
        filename("1234567.txt", 10, "+"),
        "1234567+.txt"
    );
    assert.equal(
        filename("1234567.text", 10, "+"),
        "1234567+.text"
    );
    assert.equal(
        filename("1234567.longer", 10, "@"),
        "1234567@.longer"
    );
  });

  it("should split long file names according to line length", function () {
    assert.equal(
        filename("123_123456789_123_123445678_0123456789_123", 10, "|"),
        "123_123456|789_123_12|3_12344567|8_01234567|89_123"
    );
    assert.equal(
        filename("123_123456789_123_123445678_0123456789_123", 5, "|"),
        "123_1|23456|789_1|23_12|34456|78_01|23456|789_1|23"
    );
  });

  it("should split long word with extensions according to line length", function () {
    assert.equal(
        filename("123_123456789_123_123445678_0123456789_123.txt", 10, "|"),
        "123_123456|789_123_12|3_12344567|8_01234567|89_123.txt"
    );
    assert.equal(
        filename("123_123456789_123_123445678_0123456789_13.txt", 5, "|"),
        "123_1|23456|789_1|23_12|34456|78_01|23456|789_1|3.txt"
    );
    assert.equal(
        filename("123_123456789_123_123445678_0123456789_13456.json", 5, "|"),
        "123_1|23456|789_1|23_12|34456|78_01|23456|789_1|3456|.json"
    );
    assert.equal(
        filename("123_123456789_123_123445678_0123456789_1234.jpg", 10, "|"),
        "123_123456|789_123_12|3_12344567|8_01234567|89_1234|.jpg"
    );
    assert.equal(
        filename("123_123456789_123_123445678_0123456789_12.json", 10, "|"),
        "123_123456|789_123_12|3_12344567|8_01234567|89_12.json"
    );
    assert.equal(
        filename("123_123456789_123_123445678_0123456789_1234.json", 10, "|"),
        "123_123456|789_123_12|3_12344567|8_01234567|89_1234|.json"
    );
  });

  it("should not split words if they are not longer or equal to line length", function () {

    //first word and next one less then 10, so no split
    assert.equal(
        filename("1234 1234", 10, "|"),
        "1234 1234"
    );

    //first word and next together fit into 10 chars line
    assert.equal(
        filename("12345 1234", 10, "|"),
        "12345 1234"
    );

    //the same with extension

    //first word and next one less then 10, so no split
    assert.equal(
        filename("1 345.txt", 10, "|"),
        "1 345.txt"
    );

    //first word and next together fit into 10 chars line
    assert.equal(
        filename("12 456.txt", 10, "|"),
        "12 456.txt"
    );
  });

  it("should not split words if they don\"t fit into line", function () {

    //both words don't fit into one line, so they should be split into two
    assert.equal(
        filename("12345 1234", 10, "|"),
        "12345|1234" // "12345 |1234" will be ok too
    );
    //first and second word don't fit in one line, but second and third are ok
    assert.equal(
        filename("12345 1234 1234", 10, "|"),
        "12345|1234 1234"
    );

    assert.equal(
        filename("12345 1234 1234 other", 10, "|"),
        "12345|1234 1234|other"
    );

    //with extensions
    assert.equal(
        filename("12345 1234.mp4", 10, "|"),
        "12345|1234.mp4"
    );
    assert.equal(
        filename("12345 1234 1234.mp4", 10, "|"),
        "12345|1234 1234|.mp4"
    );
  });

});

