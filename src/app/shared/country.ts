export interface CountryModel {
    name: string;
    dial_code: string;
    code: string;
    maxLength?: number;
}

export class CountryList {
    public static getCountryList(): CountryModel[] {
        return [
            {
                name: "Afghanistan",
                dial_code: "+93",
                code: "AF",
                maxLength: 9
            },
            {
                name: "Aland Islands",
                dial_code: "+358",
                code: "AX",
                maxLength: 9
            },
            {
                name: "Albania",
                dial_code: "+355",
                code: "AL",
                maxLength: 9
            },
            {
                name: "Algeria",
                dial_code: "+213",
                code: "DZ",
                maxLength: 9
            },
            {
                name: "AmericanSamoa",
                dial_code: "+1684",
                code: "AS",
                maxLength: 7
            },
            {
                name: "Andorra",
                dial_code: "+376",
                code: "AD",
                maxLength: 9
            },
            {
                name: "Angola",
                dial_code: "+244",
                code: "AO",
                maxLength: 9
            },
            {
                name: "Anguilla",
                dial_code: "+1264",
                code: "AI",
                maxLength: 7
            },
            {
                name: "Antarctica",
                dial_code: "+672",
                code: "AQ",
                maxLength: 9
            },
            {
                name: "Antigua and Barbuda",
                dial_code: "+1268",
                code: "AG",
                maxLength: 7
            },
            {
                name: "Argentina",
                dial_code: "+54",
                code: "AR",
                maxLength: 9
            },
            {
                name: "Armenia",
                dial_code: "+374",
                code: "AM",
                maxLength: 8
            },
            {
                name: "Aruba",
                dial_code: "+297",
                code: "AW",
                maxLength: 7

            },
            {
                name: "Australia",
                dial_code: "+61",
                code: "AU",
                maxLength: 15
            },
            {
                name: "Austria",
                dial_code: "+43",
                code: "AT",
                maxLength: 15
            },
            {
                name: "Azerbaijan",
                dial_code: "+994",
                code: "AZ",
                maxLength: 9

            },
            {
                name: "Bahamas",
                dial_code: "+1242",
                code: "BS",
                maxLength: 7

            },
            {
                name: "Bahrain",
                dial_code: "+973",
                code: "BH",
                maxLength: 8

            },
            {
                name: "Bangladesh",
                dial_code: "+880",
                code: "BD",
                maxLength: 10

            },
            {
                name: "Barbados",
                dial_code: "+1246",
                code: "BB",
                maxLength: 7

            },
            {
                name: "Belarus",
                dial_code: "+375",
                code: "BY",
                maxLength: 10

            },
            {
                name: "Belgium",
                dial_code: "+32",
                code: "BE",
                maxLength: 19

            },
            {
                name: "Belize",
                dial_code: "+501",
                code: "BZ",
                maxLength: 7

            },
            {
                name: "Benin",
                dial_code: "+229",
                code: "BJ",
                maxLength: 8

            },
            {
                name: "Bermuda",
                dial_code: "+1441",
                code: "BM",
                maxLength: 7

            },
            {
                name: "Bhutan",
                dial_code: "+975",
                code: "BT",
                maxLength: 8

            },
            {
                name: "Bolivia, Plurinational State of",
                dial_code: "+591",
                code: "BO",
                maxLength: 7

            },
            {
                name: "Bosnia and Herzegovina",
                dial_code: "+387",
                code: "BA",
                maxLength: 8


            },
            {
                name: "Botswana",
                dial_code: "+267",
                code: "BW",
                maxLength: 8
            },
            {
                name: "Brazil",
                dial_code: "+55",
                code: "BR",
                maxLength: 10
            },
            {
                name: "British Indian Ocean Territory",
                dial_code: "+246",
                code: "IO",
                maxLength: 7
            },
            {
                name: "Brunei Darussalam",
                dial_code: "+673",
                code: "BN",
                maxLength: 7
            },
            {
                name: "Bulgaria",
                dial_code: "+359",
                code: "BG",
                maxLength: 9
            },
            {
                name: "Burkina Faso",
                dial_code: "+226",
                code: "BF",
                maxLength: 8
            },
            {
                name: "Burundi",
                dial_code: "+257",
                code: "BI",
                maxLength: 8
            },
            {
                name: "Cambodia",
                dial_code: "+855",
                code: "KH"
            },
            {
                name: "Cameroon",
                dial_code: "+237",
                code: "CM"
            },
            {
                name: "Canada",
                dial_code: "+1",
                code: "CA"
            },
            {
                name: "Cape Verde",
                dial_code: "+238",
                code: "CV"
            },
            {
                name: "Cayman Islands",
                dial_code: "+ 345",
                code: "KY"
            },
            {
                name: "Central African Republic",
                dial_code: "+236",
                code: "CF"
            },
            {
                name: "Chad",
                dial_code: "+235",
                code: "TD"
            },
            {
                name: "Chile",
                dial_code: "+56",
                code: "CL"
            },
            {
                name: "China",
                dial_code: "+86",
                code: "CN"
            },
            {
                name: "Christmas Island",
                dial_code: "+61",
                code: "CX"
            },
            {
                name: "Cocos (Keeling) Islands",
                dial_code: "+61",
                code: "CC"
            },
            {
                name: "Colombia",
                dial_code: "+57",
                code: "CO"
            },
            {
                name: "Comoros",
                dial_code: "+269",
                code: "KM"
            },
            {
                name: "Congo",
                dial_code: "+242",
                code: "CG"
            },
            {
                name: "Congo, The Democratic Republic of the Congo",
                dial_code: "+243",
                code: "CD"
            },
            {
                name: "Cook Islands",
                dial_code: "+682",
                code: "CK"
            },
            {
                name: "Costa Rica",
                dial_code: "+506",
                code: "CR"
            },
            {
                name: "Cote d'Ivoire",
                dial_code: "+225",
                code: "CI"
            },
            {
                name: "Croatia",
                dial_code: "+385",
                code: "HR"
            },
            {
                name: "Cuba",
                dial_code: "+53",
                code: "CU"
            },
            {
                name: "Cyprus",
                dial_code: "+357",
                code: "CY"
            },
            {
                name: "Czech Republic",
                dial_code: "+420",
                code: "CZ"
            },
            {
                name: "Denmark",
                dial_code: "+45",
                code: "DK"
            },
            {
                name: "Djibouti",
                dial_code: "+253",
                code: "DJ"
            },
            {
                name: "Dominica",
                dial_code: "+1767",
                code: "DM"
            },
            {
                name: "Dominican Republic",
                dial_code: "+1849",
                code: "DO"
            },
            {
                name: "Ecuador",
                dial_code: "+593",
                code: "EC"
            },
            {
                name: "Egypt",
                dial_code: "+20",
                code: "EG"
            },
            {
                name: "El Salvador",
                dial_code: "+503",
                code: "SV"
            },
            {
                name: "Equatorial Guinea",
                dial_code: "+240",
                code: "GQ"
            },
            {
                name: "Eritrea",
                dial_code: "+291",
                code: "ER"
            },
            {
                name: "Estonia",
                dial_code: "+372",
                code: "EE"
            },
            {
                name: "Ethiopia",
                dial_code: "+251",
                code: "ET"
            },
            {
                name: "Falkland Islands (Malvinas)",
                dial_code: "+500",
                code: "FK"
            },
            {
                name: "Faroe Islands",
                dial_code: "+298",
                code: "FO"
            },
            {
                name: "Fiji",
                dial_code: "+679",
                code: "FJ"
            },
            {
                name: "Finland",
                dial_code: "+358",
                code: "FI"
            },
            {
                name: "France",
                dial_code: "+33",
                code: "FR"
            },
            {
                name: "French Guiana",
                dial_code: "+594",
                code: "GF"
            },
            {
                name: "French Polynesia",
                dial_code: "+689",
                code: "PF"
            },
            {
                name: "Gabon",
                dial_code: "+241",
                code: "GA",
                maxLength: 7
            },
            {
                name: "Gambia",
                dial_code: "+220",
                code: "GM",
                maxLength: 7
            },
            {
                name: "Georgia",
                dial_code: "+995",
                code: "GE",
                maxLength: 9
            },
            {
                name: "Germany",
                dial_code: "+49",
                code: "DE",
                maxLength: 13
            },
            {
                name: "Ghana",
                dial_code: "+233",
                code: "GH",
                maxLength: 9
            },
            {
                name: "Gibraltar",
                dial_code: "+350",
                code: "GI",
                maxLength: 8
            },
            {
                name: "Greece",
                dial_code: "+30",
                code: "GR",
                maxLength: 10
            },
            {
                name: "Greenland",
                dial_code: "+299",
                code: "GL",
                maxLength: 6
            },
            {
                name: "Grenada",
                dial_code: "+1473",
                code: "GD",
                maxLength: 7
            },
            {
                name: "Guadeloupe",
                dial_code: "+590",
                code: "GP",
                maxLength: 9
            },
            {
                name: "Guam",
                dial_code: "+1671",
                code: "GU",
                maxLength: 7
            },
            {
                name: "Guatemala",
                dial_code: "+502",
                code: "GT",
                maxLength: 8
            },
            {
                name: "Guernsey",
                dial_code: "+44",
                code: "GG"
            },
            {
                name: "Guinea",
                dial_code: "+224",
                code: "GN",
                maxLength: 8
            },
            {
                name: "Guinea-Bissau",
                dial_code: "+245",
                code: "GW",
                maxLength: 7
            },
            {
                name: "Guyana",
                dial_code: "+595",
                code: "GY",
                maxLength: 7
            },
            {
                name: "Haiti",
                dial_code: "+509",
                code: "HT",
                maxLength: 8
            },
            {
                name: "Holy See (Vatican City State)",
                dial_code: "+379",
                code: "VA"
            },
            {
                name: "Honduras",
                dial_code: "+504",
                code: "HN",
                maxLength: 8
            },
            {
                name: "Hong Kong",
                dial_code: "+852",
                code: "HK",
                maxLength: 9
            },
            {
                name: "Hungary",
                dial_code: "+36",
                code: "HU",
                maxLength: 9
            },
            {
                name: "Iceland",
                dial_code: "+354",
                code: "IS",
                maxLength: 9
            },
            {
                name: "India",
                dial_code: "+91",
                code: "IN",
                maxLength: 10
            },
            {
                name: "Indonesia",
                dial_code: "+62",
                code: "ID",
                maxLength: 10
            },
            {
                name: "Iran, Islamic Republic of Persian Gulf",
                dial_code: "+98",
                code: "IR",
                maxLength: 10
            },
            {
                name: "Iraq",
                dial_code: "+964",
                code: "IQ",
                maxLength: 10
            },
            {
                name: "Ireland",
                dial_code: "+353",
                code: "IE",
                maxLength: 11
            },
            {
                name: "Isle of Man",
                dial_code: "+44",
                code: "IM"
            },
            {
                name: "Israel",
                dial_code: "+972",
                code: "IL",
                maxLength: 9
            },
            {
                name: "Italy",
                dial_code: "+39",
                code: "IT",
                maxLength: 11
            },
            {
                name: "Jamaica",
                dial_code: "+1876",
                code: "JM",
                maxLength: 7
            },
            {
                name: "Japan",
                dial_code: "+81",
                code: "JP",
                maxLength: 13
            },
            {
                name: "Jersey",
                dial_code: "+44",
                code: "JE",
            },
            {
                name: "Jordan",
                dial_code: "+962",
                code: "JO",
                 maxLength: 8

            },
            {
                name: "Kazakhstan",
                dial_code: "+77",
                code: "KZ",
                maxLength: 10
            },
            {
                name: "Kenya",
                dial_code: "+254",
                code: "KE",
                maxLength: 10
            },
            {
                name: "Kiribati",
                dial_code: "+686",
                code: "KI",
                maxLength: 5
            },
            {
                name: "Korea, Democratic People's Republic of Korea",
                dial_code: "+850",
                code: "KP",
                maxLength: 11
            },
            {
                name: "Kuwait",
                dial_code: "+965",
                code: "KW",
                maxLength: 8
            },
            {
                name: "Kyrgyzstan",
                dial_code: "+996",
                code: "KG",
                maxLength: 9
            },
            {
                name: "Laos",
                dial_code: "+856",
                code: "LA",
                maxLength: 10
            },
            {
                name: "Latvia",
                dial_code: "+371",
                code: "LV",
                maxLength: 8
            },
            {
                name: "Lebanon",
                dial_code: "+961",
                code: "LB",
                maxLength: 8
            },
            {
                name: "Lesotho",
                dial_code: "+266",
                code: "LS",
                maxLength: 8
            },
            {
                name: "Liberia",
                dial_code: "+231",
                code: "LR",
                maxLength: 8
            },
            {
                name: "Libyan Arab Jamahiriya",
                dial_code: "+218",
                code: "LY",
                maxLength: 9
            },
            {
                name: "Liechtenstein",
                dial_code: "+423",
                code: "LI",
                maxLength: 9
            },
            {
                name: "Lithuania",
                dial_code: "+370",
                code: "LT",
                maxLength: 8
            },
            {
                name: "Luxembourg",
                dial_code: "+352",
                code: "LU",
                maxLength: 11
            },
            {
                name: "Macao",
                dial_code: "+853",
                code: "MO",
                maxLength: 8
            },
            {
                name: "Madagascar",
                dial_code: "+261",
                code: "MG",
                maxLength: 10
            },
            {
                name: "Malawi",
                dial_code: "+265",
                code: "MW",
                maxLength: 8
            },
            {
                name: "Malaysia",
                dial_code: "+60",
                code: "MY",
                maxLength: 9
            },
            {
                name: "Maldives",
                dial_code: "+960",
                code: "MV",
                maxLength: 7
            },
            {
                name: "Mali",
                dial_code: "+223",
                code: "ML",
                maxLength: 8
            },
            {
                name: "Malta",
                dial_code: "+356",
                code: "MT",
                maxLength: 8
            },
            {
                name: "Marshall Islands",
                dial_code: "+692",
                code: "MH",
                maxLength: 7
            },
            {
                name: "Martinique",
                dial_code: "+596",
                code: "MQ",
                maxLength: 9
            },
            {
                name: "Mauritania",
                dial_code: "+222",
                code: "MR",
                maxLength: 7
            },
            {
                name: "Mauritius",
                dial_code: "+230",
                code: "MU",
                maxLength: 7
            },
            {
                name: "Mexico",
                dial_code: "+52",
                code: "MX",
                maxLength: 10
            },
            {
                name: "Micronesia, Federated States of Micronesia",
                dial_code: "+691",
                code: "FM",
                maxLength: 7
            },
            {
                name: "Moldova",
                dial_code: "+373",
                code: "MD",
                maxLength: 8
            },
            {
                name: "Monaco",
                dial_code: "+377",
                code: "MC",
                maxLength: 9
            },
            {
                name: "Mongolia",
                dial_code: "+976",
                code: "MN",
                maxLength: 8
            },
            {
                name: "Montenegro",
                dial_code: "+382",
                code: "ME",
                maxLength: 12
            },
            {
                name: "Montserrat",
                dial_code: "+1664",
                code: "MS",
                maxLength: 7
            },
            {
                name: "Morocco",
                dial_code: "+212",
                code: "MA",
                maxLength: 9
            },
            {
                name: "Mozambique",
                dial_code: "+258",
                code: "MZ",
                maxLength: 9
            },
            {
                name: "Myanmar",
                dial_code: "+95",
                code: "MM",
                maxLength: 9
            },
            {
                name: "Namibia",
                dial_code: "+264",
                code: "NA",
                maxLength: 10
            },
            {
                name: "Nauru",
                dial_code: "+674",
                code: "NR",
                maxLength: 7
            },
            {
                name: "Nepal",
                dial_code: "+977",
                code: "NP",
                maxLength: 9
            },
            {
                name: "Netherlands",
                dial_code: "+31",
                code: "NL",
                maxLength: 9
            },
            {
                name: "New Caledonia",
                dial_code: "+687",
                code: "NC",
                maxLength: 6
            },
            {
                name: "New Zealand",
                dial_code: "+64",
                code: "NZ",
                maxLength: 10
            },
            {
                name: "Nicaragua",
                dial_code: "+505",
                code: "NI",
                maxLength: 8
            },
            {
                name: "Niger",
                dial_code: "+227",
                code: "NE",
                maxLength: 8
            },
            {
                name: "Nigeria",
                dial_code: "+234",
                code: "NG",
                maxLength: 10
            },
            {
                name: "Niue",
                dial_code: "+683",
                code: "NU",
                maxLength: 4
            },
            {
                name: "Norfolk Island",
                dial_code: "+672",
                code: "NF",
                maxLength: 7
            },
            {
                name: "Northern Mariana Islands",
                dial_code: "+1670",
                code: "MP",
                maxLength: 7
            },
            {
                name: "Norway",
                dial_code: "+47",
                code: "NO",
                maxLength: 8
            },
            {
                name: "Oman",
                dial_code: "+968",
                code: "OM",
                maxLength: 8
            },
            {
                name: "Pakistan",
                dial_code: "+92",
                code: "PK",
                maxLength: 11
            },
            {
                name: "Palau",
                dial_code: "+680",
                code: "PW",
                maxLength: 7
            },
            {
                name: "Panama",
                dial_code: "+507",
                code: "PA",
                maxLength: 8
            },
            {
                name: "Papua New Guinea",
                dial_code: "+675",
                code: "PG",
                maxLength: 11
            },
            {
                name: "Paraguay",
                dial_code: "+595",
                code: "PY",
                maxLength: 9
            },
            {
                name: "Peru",
                dial_code: "+51",
                code: "PE",
                maxLength: 11
            },
            {
                name: "Philippines",
                dial_code: "+63",
                code: "PH",
                maxLength: 10
            },
            {
                name: "Pitcairn",
                dial_code: "+872",
                code: "PN",
                maxLength: 9
            },
            {
                name: "Poland",
                dial_code: "+48",
                code: "PL",
                maxLength: 9
            },
            {
                name: "Portugal",
                dial_code: "+351",
                code: "PT",
                maxLength: 11
            },
            {
                name: "Puerto Rico",
                dial_code: "+1939",
                code: "PR",
                maxLength: 7
            },
            {
                name: "Qatar",
                dial_code: "+974",
                code: "QA",
                maxLength: 8
            },
            {
                name: "Romania",
                dial_code: "+40",
                code: "RO",
                maxLength: 9
            },
            {
                name: "Russia",
                dial_code: "+7",
                code: "RU",
                maxLength: 10
            },
            {
                name: "Rwanda",
                dial_code: "+250",
                code: "RW",
                maxLength: 9
            },
            {
                name: "Saint Barthelemy",
                dial_code: "+590",
                code: "BL",
                maxLength: 4
            },
            {
                name: "Saint Helena, Ascension and Tristan Da Cunha",
                dial_code: "+290",
                code: "SH",
                maxLength: 4
            },
            {
                name: "Saint Kitts and Nevis",
                dial_code: "+1869",
                code: "KN",
                maxLength: 7
            },
            {
                name: "Saint Lucia",
                dial_code: "+1758",
                code: "LC",
                maxLength: 7
            },
            {
                name: "Saint Pierre and Miquelon",
                dial_code: "+508",
                code: "PM",
                maxLength: 6
            },
            {
                name: "Saint Vincent and the Grenadines",
                dial_code: "+1784",
                code: "VC",
                maxLength: 7
            },
            {
                name: "Samoa",
                dial_code: "+685",
                code: "WS",
                maxLength: 7
            },
            {
                name: "San Marino",
                dial_code: "+378",
                code: "SM",
                maxLength: 10
                
            },
            {
                name: "Sao Tome and Principe",
                dial_code: "+239",
                code: "ST", 
                 maxLength: 10


            },
            {
                name: "Saudi Arabia",
                dial_code: "+966",
                code: "SA", 
                maxLength: 9
            },
            {
                name: "Senegal",
                dial_code: "+221",
                code: "SN", 
                maxLength: 9
            },
            {
                name: "Serbia",
                dial_code: "+381",
                code: "RS", 
                maxLength: 12
            },
            {
                name: "Seychelles",
                dial_code: "+248",
                code: "SC", 
                maxLength: 7
            },
            {
                name: "Sierra Leone",
                dial_code: "+232",
                code: "SL",
                maxLength: 8
            },
            {
                name: "Singapore",
                dial_code: "+65",
                code: "SG",
                maxLength: 8
            },
            {
                name: "Slovakia",
                dial_code: "+421",
                code: "SK",
                maxLength: 9
            },
            {
                name: "Slovenia",
                dial_code: "+386",
                code: "SI",
                maxLength: 8
            },
            {
                name: "Solomon Islands",
                dial_code: "+677",
                code: "SB",
                maxLength: 7
            },
            {
                name: "Somalia",
                dial_code: "+252",
                code: "SO",
                maxLength: 8
            },
            {
                name: "South Africa",
                dial_code: "+27",
                code: "ZA",
                maxLength: 12
            },
            {
                name: "South Sudan",
                dial_code: "+211",
                code: "SS",
                maxLength: 9
            },
            {
                name: "South Georgia and the South Sandwich Islands",
                dial_code: "+500",
                code: "GS",
                maxLength: 4
            },
            {
                name: "Spain",
                dial_code: "+34",
                code: "ES",
                maxLength: 9
            },
            {
                name: "Sri Lanka",
                dial_code: "+94",
                code: "LK",
                maxLength: 9
            },
            {
                name: "Sudan",
                dial_code: "+249",
                code: "SD",
                maxLength: 9
            },
            {
                name: "Suriname",
                dial_code: "+597",
                code: "SR",
                maxLength: 7
            },
            {
                name: "Svalbard and Jan Mayen",
                dial_code: "+47",
                code: "SJ",
                maxLength: 8
            },
            {
                name: "Swaziland",
                dial_code: "+268",
                code: "SZ",
                maxLength: 8
            },
            {
                name: "Sweden",
                dial_code: "+46",
                code: "SE",
                maxLength: 12
            },
            {
                name: "Switzerland",
                dial_code: "+41",
                code: "CH",
                maxLength: 9
            },
            {
                name: "Syrian Arab Republic",
                dial_code: "+963",
                code: "SY",
                maxLength: 8
            },
            {
                name: "Taiwan",
                dial_code: "+886",
                code: "TW",
                maxLength: 9
            },
            {
                name: "Tajikistan",
                dial_code: "+992",
                code: "TJ",
                maxLength: 9
            },
            {
                name: "Tanzania, United Republic of Tanzania",
                dial_code: "+255",
                code: "TZ",
                maxLength: 9
            },
            {
                name: "Thailand",
                dial_code: "+66",
                code: "TH",
                maxLength: 9
            },
            {
                name: "Timor-Leste",
                dial_code: "+670",
                code: "TL",
                maxLength: 8
            },
            {
                name: "Togo",
                dial_code: "+228",
                code: "TG",
                maxLength: 8
            },
            {
                name: "Tokelau",
                dial_code: "+690",
                code: "TK",
                maxLength: 5
            },
            {
                name: "Tonga",
                dial_code: "+676",
                code: "TO",
                maxLength: 5
            },
            {
                name: "Trinidad and Tobago",
                dial_code: "+1868",
                code: "TT",
                maxLength: 7
            },
            {
                name: "Tunisia",
                dial_code: "+216",
                code: "TN",
                maxLength: 8
            },
            {
                name: "Turkey",
                dial_code: "+90",
                code: "TR",
                maxLength: 10
                
            },
            {
                name: "Turkmenistan",
                dial_code: "+993",
                code: "TM",
                maxLength: 8
            },
            {
                name: "Turks and Caicos Islands",
                dial_code: "+1649",
                code: "TC",
                maxLength: 7
            },
            {
                name: "Tuvalu",
                dial_code: "+688",
                code: "TV",
                maxLength: 5
            },
            {
                name: "Uganda",
                dial_code: "+256",
                code: "UG",
                maxLength: 9
            },
            {
                name: "Ukraine",
                dial_code: "+380",
                code: "UA",
                maxLength: 12
            },
            {
                name: "United Arab Emirates",
                dial_code: "+971",
                code: "AE",
                maxLength: 9
            },
            {
                name: "United Kingdom",
                dial_code: "+44",
                code: "GB",
                maxLength: 10
            },
            {
                name: "United States",
                dial_code: "+1",
                code: "US",
                maxLength: 10
            },
            {
                name: "Uruguay",
                dial_code: "+598",
                code: "UY",
                maxLength: 8
            },
            {
                name: "Uzbekistan",
                dial_code: "+998",
                code: "UZ",
                maxLength: 9
            },
            {
                name: "Vanuatu",
                dial_code: "+678",
                code: "VU",
                maxLength: 7
            },
            {
                name: "Venezuela, Bolivarian Republic of Venezuela",
                dial_code: "+58",
                code: "VE",
                maxLength: 10
            },
            {
                name: "Vietnam",
                dial_code: "+84",
                code: "VN",
                maxLength: 10
            },
            {
                name: "Virgin Islands, British",
                dial_code: "+1284",
                code: "VG",
                maxLength: 7
            },
            {
                name: "Virgin Islands, U.S.",
                dial_code: "+1340",
                code: "VI",
                maxLength: 10
            },
            {
                name: "Wallis and Futuna",
                dial_code: "+681",
                code: "WF",
                maxLength: 6
            },
            {
                name: "Yemen",
                dial_code: "+967",
                code: "YE",
                maxLength: 7
            },
            {
                name: "Zambia",
                dial_code: "+260",
                code: "ZM",
                maxLength: 9
            },
            {
                name: "Zimbabwe",
                dial_code: "+263",
                code: "ZW",
                maxLength: 9
            }
        ]
    }
}