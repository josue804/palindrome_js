describe('pigLatin', function() {
  it("adds ay to the end of a word that starts with a vowel", function() {
    expect(pigLatin("orange")).to.equal("orangeay");
  });

  it("moves consecutive consonants to end of word", function() {
    expect(pigLatin("striation")).to.equal("iationstray");
  });

  it("if word contains qu at beginning of word, qu is sent to end of word", function() {
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });
});
