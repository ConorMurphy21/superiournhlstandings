export default {
    pointCompare: function (aRow, bRow, key){
        return pointCompare(aRow,bRow,key);
    }
}

function pointCompare(aRow, bRow, key){
    if(key !== "points") return false;
    let cmp = aRow[key] - bRow[key];
    if (cmp !== 0) return cmp;
    cmp = bRow.gamesPlayed - aRow.gamesPlayed;
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