export default {
    pointCompare: function (aRow, bRow, key){
        return pointCompare(aRow,bRow,key);
    },
    tieBreakerCompare: function(aRow, bRow){
        return tieBreakerCompare(aRow, bRow);
    },
    rankCompare: function(aRow, bRec, type){
        return rankCompare(aRow, bRec, type);
    }
}
//compare points with tiebreaker
function pointCompare(aRow, bRow, key){
    if(key !== "points" && key !== "custPoints") return false;
    let cmp = aRow[key] - bRow[key];
    if(cmp !== 0) return cmp;
    return tieBreakerCompare(aRow, bRow);
}
function tieBreakerCompare(aRow, bRow){
    let cmp = bRow.gamesPlayed - aRow.gamesPlayed;
    if (cmp !== 0) return cmp;
    cmp = aRow.regulationWins - bRow.regulationWins;
    if (cmp !== 0) return cmp;
    cmp = aRow.row - bRow.row;
    if (cmp !== 0) return cmp;
    cmp = aRow.wins - bRow.wins;
    if (cmp !== 0) return cmp;
    cmp = aRow.wins - bRow.wins;
    return cmp;
}

function rankCompare(rank, nhl, rankType){
    //cust has only rank defined
    if(rankType === "wildCard"){
        if(nhl.wildCardRank === "0"){
            return nhl.divisionRank - rank - 3;
        }else{
            return nhl.wildCardRank - rank;
        }
    } else if (rankType === "topWildCard"){
        if(nhl.wildCardRank === "0"){
            return nhl.divisionRank - rank;
        }else{
            console.log("div: " + nhl.divisionRank);
            console.log("wc:" + nhl.wildCardRank);
            console.log("rank: " + rank);
            return nhl.wildCardRank + (3-rank);
        }
    } else {
        return nhl[rankType] - rank;
    }
}