

function findMatching(source, sought) {
    return source.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
  }


function fuzzyMatch(source, sought) {
    return source.filter(
      (possibleMatch) => possibleMatch.charAt(0).toLowerCase() === sought.charAt(0).toLowerCase()
    );

}

function matchName(source, str){
    return source.filter((data) => data.name.toLowerCase() === str.toLowerCase()
    );

}


