var removeVowels =require("./remove-vowels");
test('remove vowels from word', function () {

    // Arrange
    
    var result = removeVowels("samuel");
     // Act
    
    // Assert
    expect(result).toBe("sml");
   
})