const ROUTER_ADDRESS = "0xD99D1c33F9fC3444f8101754aBC46c52416550D1";
const COORDINATOR_ADDRESS = "0x6A2AAd07396B36Fe02a22b33cf443582f682c82f";
const MINT_TO="0x31a7c42EDBc1eA0196aFa766a46b42B99a903e4e";
const DONATE_TO="0x3D8c05Fa6119651A108bE33a0EF7B274eb71Ae80";
const DEV="0xa37efbF6d4603C3d9e97E33c36691e3C336E126F";
const TREASURY="0xfcA7C0c1a34ba7AF9B0b6e1506BEae5Bc7ec513f";
const JACKPOT_POOL="0xbfCf9d6C0d2B86AC3438B4C1EB42c75ED289F71F";
const DONATION_POOL="0xC341aF66BD390F29997B954b58A787fc0e6541a4";
const HODL_POOL="0x2c14Fb0F3B87cBd040664aE35DcE51B6a8d1e2e6";
const TEAM_ACCUMULATION = "0x0000000000000000000000000000000000000001";
const TREASURY_ACCUMULATION = "0x0000000000000000000000000000000000000002";

const ConsumerConfig = {
    subscriptionId: 2937,
    callbackGasLimit: 2_500_000,
    requestConfirmations: 3,
    gasPriceKey: "0xd4bb89654db74673a187bd804519e65e3f71a52bc55f11da7601a13dcf505314"
}

const ProtocolConfig = {
    holderLotteryPrizePoolAddress:  HODL_POOL,
    firstBuyLotteryPrizePoolAddress:  JACKPOT_POOL,
    donationLotteryPrizePoolAddress:  DONATION_POOL,
    teamAddress: DEV,
    treasuryAddress: TREASURY,
    teamFeesAccumulationAddress: TEAM_ACCUMULATION,
    treasuryFeesAccumulationAddress: TREASURY_ACCUMULATION,
    burnFee: 50,
    liquidityFee: 75,
    distributionFee: 50,
    treasuryFee: 50,
    devFee: 75,
    firstBuyLotteryPrizeFee: 50,
    holdersLotteryPrizeFee: 75,
    donationLotteryPrizeFee: 75
}

const LotteryConfig = {
    firstBuyLotteryEnabled: true,
    holdersLotteryEnabled: true,
    holdersLotteryTxTrigger: 6,
    holdersLotteryMinBalance: "10000000000000000000000",
    donationAddress: DONATE_TO,
    donationsLotteryEnabled: true,
    minimumDonationEntries: 2,
    donationLotteryTxTrigger: 5,
    minimalDonation: "1000000000000000000000"
}

module.exports = [
    MINT_TO,
    COORDINATOR_ADDRESS,
    ROUTER_ADDRESS,
    ConsumerConfig,
    ProtocolConfig,
    LotteryConfig
]