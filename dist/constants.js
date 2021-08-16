"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateSelection = exports.ColorSelection = exports.Colors = exports.Domains = exports.Clubs = void 0;
var Clubs;
(function (Clubs) {
    Clubs["ALDARRA"] = "Aldarra Golf Club";
    Clubs["ASTORIA"] = "Astoria Golf & Country Club";
    Clubs["BROADMOOR"] = "Broadmoor";
    Clubs["DRIVERS_CLUB"] = "Drivers Club";
    Clubs["MILL_CREEK"] = "Mill Creek Country Club";
    Clubs["OTTO"] = "OTTO";
    Clubs["CEDAR_CREEK"] = "Cedar Creek Golf & Country Club";
    Clubs["SEMIAHMOO"] = "Semiahmoo Golf & Country Club";
    Clubs["STONE_WAY"] = "Stone Way Car Club";
    Clubs["WAC"] = "Washington Athletic Club";
    Clubs["WING_POINT"] = "Wing Point Golf & Country Club";
    Clubs["APEX"] = "APEX Motor Club";
    Clubs["EUGENE"] = "Eugene Country Club";
    Clubs["TUALATIN"] = "Tualatin Country Club";
    Clubs["THE_SHOP"] = "The Shop";
    Clubs["THE_COLLECTIVE"] = "The Collective";
    Clubs["MCCORMICK_WOODS"] = "McCormick Woods Golf Club";
})(Clubs = exports.Clubs || (exports.Clubs = {}));
var Domains;
(function (Domains) {
    Domains["ALDARRA"] = "aldarra";
    Domains["ASTORIA"] = "astoria";
    Domains["BROADMOOR"] = "broadmoor";
    Domains["DRIVERS_CLUB"] = "driversclub";
    Domains["OTTO"] = "otto";
    Domains["WING_POINT"] = "wingpoint";
    Domains["CEDAR_CREEK"] = "cedar";
    Domains["SEMIAHMOO"] = "semiahmoo";
})(Domains = exports.Domains || (exports.Domains = {}));
var Colors;
(function (Colors) {
    Colors["BLUE"] = "#4780CF";
    Colors["AZURE"] = "#45aaf2";
    Colors["INDIGO"] = "#6574cd";
    Colors["PURPLE"] = "#a55eea";
    Colors["PINK"] = "#f66d9b";
    Colors["RED"] = "#cd201f";
    Colors["ORANGE"] = "#fd9644";
    Colors["YELLOW"] = "#f1c40f";
    Colors["LIME"] = "#7bd235";
    Colors["GREEN"] = "#5eba00";
    Colors["TEAL"] = "#2bcbba";
    Colors["CYAN"] = "#17a2b8";
    Colors["GRAY"] = "#adb5bd";
})(Colors = exports.Colors || (exports.Colors = {}));
exports.ColorSelection = [
    { label: 'Blue', value: Colors.BLUE, color: Colors.BLUE },
    { label: 'Azure', value: Colors.AZURE, color: Colors.AZURE },
    { label: 'Indigo', value: Colors.INDIGO, color: Colors.INDIGO },
    { label: 'Purple', value: Colors.PURPLE, color: Colors.PURPLE },
    { label: 'Pink', value: Colors.PINK, color: Colors.PINK },
    { label: 'Red', value: Colors.RED, color: Colors.RED },
    { label: 'Orange', value: Colors.ORANGE, color: Colors.ORANGE },
    { label: 'Yellow', value: Colors.YELLOW, color: Colors.YELLOW },
    { label: 'Lime', value: Colors.LIME, color: Colors.LIME },
    { label: 'Green', value: Colors.GREEN, color: Colors.GREEN },
    { label: 'Teal', value: Colors.TEAL, color: Colors.TEAL },
    { label: 'Cyan', value: Colors.CYAN, color: Colors.CYAN },
];
exports.StateSelection = [
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'California', value: 'CA' },
    { label: 'Colorado', value: 'CO' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'District of Columbia', value: 'DC' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'Alaska', value: 'AK' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Illinois', value: 'IL' },
    { label: 'Indiana', value: 'IN' },
    { label: 'Iowa', value: 'IA' },
    { label: 'Kansas', value: 'KS' },
    { label: 'Kentucky', value: 'KY' },
    { label: 'Louisiana', value: 'LA' },
    { label: 'Maine', value: 'ME' },
    { label: 'Maryland', value: 'MD' },
    { label: 'Massachusetts', value: 'MA' },
    { label: 'Michigan', value: 'MI' },
    { label: 'Minnesota', value: 'MN' },
    { label: 'Mississippi', value: 'MS' },
    { label: 'Missouri', value: 'MO' },
    { label: 'Montana', value: 'MT' },
    { label: 'Nebraska', value: 'NE' },
    { label: 'Nevada', value: 'NV' },
    { label: 'New Hampshire', value: 'NH' },
    { label: 'New Jersey', value: 'NJ' },
    { label: 'New Mexico', value: 'NM' },
    { label: 'New York', value: 'NY' },
    { label: 'North Carolina', value: 'NC' },
    { label: 'North Dakota', value: 'ND' },
    { label: 'Ohio', value: 'OH' },
    { label: 'Oklahoma', value: 'OK' },
    { label: 'Oregon', value: 'OR' },
    { label: 'Pennsylvania', value: 'PA' },
    { label: 'Rhode Island', value: 'RI' },
    { label: 'South Carolina', value: 'SC' },
    { label: 'South Dakota', value: 'SD' },
    { label: 'Tennessee', value: 'TN' },
    { label: 'Texas', value: 'TX' },
    { label: 'Utah', value: 'UT' },
    { label: 'Vermont', value: 'VT' },
    { label: 'Virginia', value: 'VA' },
    { label: 'Washington', value: 'WA' },
    { label: 'West Virginia', value: 'WV' },
    { label: 'Wisconsin', value: 'WI' },
    { label: 'Wyoming', value: 'WY' },
];
