import mongoose from 'mongoose';

const odiRankingSchema = new mongoose.Schema({
    Pos: Number,
    Country: String,
    weightedMatches: String,
    Points: String,
    Rating: Number
});

const odiBattingSchema = new mongoose.Schema({
    Player:String,	
    CareerSpan:String,	
    CareerStart:Number,
    CareerEnd:Number,
    MatchesPlayed:Number,
    InningsBatted:Number,
    NotOuts:Number,
    RunsScored:Number,
    HighestInningsScoreNum:Number
});

const ODIRanking = mongoose.model('ODIRanking', odiRankingSchema);
const ODIBatting = mongoose.model('ODIBatting', odiBattingSchema);

const models ={ODIRanking,ODIBatting};

export default models;