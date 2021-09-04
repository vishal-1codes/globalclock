import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import './SettingPage.css';
import { Link ,useHistory} from 'react-router-dom';
import { FiPlus ,FiTrash } from "react-icons/fi";



const getLocalItems=()=>{
    let list =localStorage.getItem('lists');
    console.log(list);

    if(list){
        return JSON.parse(localStorage.getItem('lists'))
    }else{
        return [];
    }
}



const SettingPage=()=>{
    const url="http://localhost:5000/clock"
    const [data,setData]=useState({
        comname:"",
        comloc:""
    })
    
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata);
    }

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            comname:data.comname,
            comloc:data.comloc
        })
        .then(res=>{
            console.log(res.data);
        })
        history.push('/Display')
    }


    








    const [inputData,setInpuData]=useState('')
    const [items,setItems]=useState(getLocalItems());

    const addItem=()=>{
        if(!inputData){

        }
        else{
            setItems([...items,inputData])
            setInpuData('')
        }
        
        
    }

    const deleteItem=(id)=>{
        console.log(id);
        const updateditems=items.filter((elem,ind)=>{
            return ind !== id;
        })
        setItems(updateditems);
    }
    
    //Remove all list
    const removeAll=()=>{
        setItems([]);
    }


    //add data to local storage
    useEffect(()=>{
        localStorage.setItem('lists',JSON.stringify(items))
    })


    let history=useHistory();

    return(
        <>
        <div className="SPmain">
            <nav  id="SPnav">DIGITAL CLOCK'S</nav>
            <form id="SPform" onSubmit={(e)=>submit(e)}>
            <p id="SPpal">ADD LOCATION</p>
            <p id="SPpcn">Company Name <input onChange={(e)=>handle(e)} id="comname" value={data.comname}  type="text" required/></p><br/>
            <p id="SPpac">Clock Location <input  onChange={(e)=>handle(e)} id="comloc" list="ide" value={data.comloc}  placeholder="Type Location" required /* id="comloc" type="text"  value={inputData} onChange={(e)=>setInpuData(e.target.value)} */ />
            <datalist id="ide">                                               
                    <option value="Africa/Abidjan"/>
                    <option value="Africa/Accra"/>
                    <option value="Africa/Addis_Ababa"/>
                    <option value="Africa/Algiers"></option>
                    <option value="Africa/Asmara"></option>
                    <option value="Africa/Bamako"></option>
                    <option value="Africa/Bangui"></option>
                    <option value="Africa/Banjul"></option>
                    <option value="Africa/Bissau"></option>
                    <option value="Africa/Blantyre"></option>
                    <option value="Africa/Brazzaville"></option>
                    <option value="Africa/Bujumbura"></option>
                    <option value="Africa/Cairo"></option>
                    <option value="Africa/Casablanca"></option>
                    <option value="Africa/Ceuta"></option>
                    <option value="Africa/Conakry"></option>
                    <option value="Africa/Dakar"></option>
                    <option value="Africa/Dar_es_Salaam"></option>
                    <option value="Africa/Djibouti"></option>
                    <option value="Africa/Douala"></option>
                    <option value="Africa/El_Aaiun"></option>
                    <option value="Africa/Freetown"></option>
                    <option value="Africa/Gaborone"></option>
                    <option value="Africa/Harare"></option>
                    <option value="Africa/Johannesburg"></option>
                    <option value="Africa/juba"></option>
                    <option value="Africa/Kampala"></option>
                    <option value="Africa/Khartoum"></option>
                    <option value="Africa/Kigali"></option>
                    <option value="Africa/Kinshasa"></option>
                    <option value="Africa/Lagos"></option>
                    <option value="Africa/Libreville"></option>
                    <option value="Africa/Lome"></option>
                    <option value="Africa/Luanda"></option>
                    <option value="Africa/Lubumbashi"></option>
                    <option value="Africa/Lusaka"></option>
                    <option value="Africa/Malabo"></option>
                    <option value="Africa/Maputo"></option>
                    <option value="Africa/Maseru"></option>
                    <option value="Africa/Mbabane"></option>
                    <option value="Africa/Mogadishu"></option>
                    <option value="Africa/Monrovia"></option>
                    <option value="Africa/Nairobi"></option>
                    <option value="Africa/Ndjamena"></option>
                    <option value="Africa/Niamey"></option>
                    <option value="Africa/Nouakchott"></option>
                    <option value="Africa/Ouagadougou"></option>
                    <option value="Africa/Porto-Novo"></option>
                    <option value="Africa/Sao_Tome"></option>
                    <option value="Africa/Timbuktu"></option>
                    <option value="Africa/Tripoli"></option>
                    <option value="Africa/Tunis"></option>
                    <option value="Africa/Windhoek"></option>
                    <option value="America/Adak"></option>
                    <option value="America/Anchorage"></option>
                    <option value="America/Anguilla"></option>
                    <option value="America/Antigua"></option>
                    <option value="America/Araguaina"></option>
                    <option value="America/Argentina/Buenos_Aires"></option>
                    <option value="America/Argentina/Catamarca"></option>
                    <option value="America/Argentina/ComodRivadavia"></option>
                    <option value="America/Argentina/Cordoba"></option>
                    <option value="America/Argentina/Jujuy"></option>
                    <option value="America/Argentina/La_Rioja"></option>
                    <option value="America/Argentina/Mendoza"></option>
                    <option value="America/Argentina/Rio_Gallegos"></option>
                    <option value="America/Argentina/Ssj"></option>
                    <option value="America/Argentina/San_Juan"></option>
                    <option value="America/Argentina/San_Luis"></option>
                    <option value="America/Argentina/Tucuman"></option>
                    <option value="America/Argentina/Ushuaia"></option>
                    <option value="America/Aruba"></option>
                    <option value="America/Asuncion"></option>
                    <option value="America/Atikokan"></option>
                    <option value="America/Atka"></option>
                    <option value="America/Bahia"></option>
                    <option value="America/Bahia_Banderas"></option>
                    <option value="America/Barbados"></option>
                    <option value="America/Belem"></option>
                    <option value="America/Belize"></option>
                    <option value="America/Blanc-Sablon"></option>
                    <option value="America/Boa_Vista"></option>
                    <option value="America/Bogota"></option>
                    <option value="America/Boise"></option>
                    <option value="America/Buenos_Aires"></option>
                    <option value="America/Cambridge_Bay"></option>
                    <option value="America/Campo_Grande"></option>
                    <option value="America/Cancun"></option>
                    <option value="America/Caracas"></option>
                    <option value="America/Catamarca"></option>
                    <option value="America/Cayenne"></option>
                    <option value="America/Cayman"></option>
                    <option value="America/Chicago"></option>
                    <option value="America/Chihuahua"></option>
                    <option value="America/Coral_Harbour"></option>
                    <option value="America/Cordoba"></option>
                    <option value="America/Costa_Rica"></option>
                    <option value="America/Creston"></option>
                    <option value="America/Cuiaba"></option>
                    <option value="America/Curacao"></option>
                    <option value="America/Danmarkshavn"></option>
                    <option value="America/Dawson"></option>
                    <option value="America/Dawson_Creek"></option>
                    <option value="America/Denver"></option>
                    <option value="America/Detroit"></option>
                    <option value="America/Dominica"></option>
                    <option value="America/Edmonton"></option>
                    <option value="America/Eirunepe"></option>
                    <option value="America/El_Salvador"></option>
                    <option value="America/Ensenada"></option>
                    <option value="America/Fort_Wayne"></option>
                    <option value="America/Fortaleza"></option>
                    <option value="America/Glace_Bay"></option>
                    <option value="America/Godthab"></option>
                    <option value="America/Goose_Bay"></option>
                    <option value="America/Grand_Turk"></option>
                    <option value="America/Grenada"></option>
                    <option value="America/Guadeloupe"></option>
                    <option value="America/Guatemala"></option>
                    <option value="America/Guayaquil"></option>
                    <option value="America/Guyana"></option>
                    <option value="America/Halifax"></option>
                    <option value="America/Havana"></option>
                    <option value="America/Hermosillo"></option>
                    <option value="America/Indiana/Indianapolis"></option>
                    <option value="America/Indiana/Knox"></option>
                    <option value="America/Indiana/Marengo"></option>
                    <option value="America/Indiana/Petersburg"></option>
                    <option value="America/Indiana/Tell_City"></option>
                    <option value="America/Indiana/Valparaiso"></option>
                    <option value="America/Indiana/Vevay"></option>
                    <option value="America/Indiana/Vincennes"></option>
                    <option value="America/Indiana/Winamac"></option>
                    <option value="America/Indianapolis"></option>
                    <option value="America/Inuvik"></option>
                    <option value="America/Iqaluit"></option>
                    <option value="America/Jamaica"></option>
                    <option value="America/Jujuy"></option>
                    <option value="America/Juneau"></option>
                    <option value="America/Kentucky/Louisville"></option>
                    <option value="America/Kentucky/Monticello"></option>
                    <option value="America/Knox_IN"></option>
                    <option value="America/Kralendijk"></option>
                    <option value="America/La_Paz"></option>
                    <option value="America/Lima"></option>
                    <option value="America/Los_Angeles"></option>
                    <option value="America/Louisville"></option>
                    <option value="America/Lower_Princes"></option>
                    <option value="America/Maceio"></option>
                    <option value="America/Managua"></option>
                    <option value="America/Manaus"></option>
                    <option value="America/Marigot"></option>
                    <option value="America/Martinique"></option>
                    <option value="America/Matamoros"></option>
                    <option value="America/Mazatlan"></option>
                    <option value="America/Mendoza"></option>
                    <option value="America/Menominee"></option>
                    <option value="America/Merida"></option>
                    <option value="America/Metlakatla"></option>
                    <option value="America/Mexico_City"></option>
                    <option value="America/Miquelon"></option>
                    <option value="America/Moncton"></option>
                    <option value="America/Monterrey"></option>
                    <option value="America/Montevideo"></option>
                    <option value="America/Montreal"></option>
                    <option value="America/Montserrat"></option>
                    <option value="America/Nassau"></option>
                    <option value="America/New_York"></option>
                    <option value="America/Nipigon"></option>
                    <option value="America/Nome"></option>
                    <option value="America/Noronha"></option>
                    <option value="America/North_Dakota/Beulah"></option>
                    <option value="America/North_Dakota/Center"></option>
                    <option value="America/North_Dakota/New_Salem"></option>
                    <option value="America/Ojinaga"></option>
                    <option value="America/Panama"></option>
                    <option value="America/Pangnirtung"></option>
                    <option value="America/Paramaribo"></option>
                    <option value="America/Phoenix"></option>
                    <option value="America/Port_of_Spain"></option>
                    <option value="America/Port-au-Prince"></option>
                    <option value="America/Porto_Acre"></option>
                    <option value="America/Porto_Velho"></option>
                    <option value="America/Puerto_Rico"></option>
                    <option value="America/Rainy_River"></option>
                    <option value="America/Rankin_Inlet"></option>
                    <option value="America/Recife"></option>
                    <option value="America/Regina"></option>
                    <option value="America/Resolute"></option>
                    <option value="America/Rosario"></option>
                    <option value="America/Santa_Isabel"></option>
                    <option value="America/Santarem"></option>
                    <option value="America/Santiago"></option>
                    <option value="America/Santo_Domingo"></option>
                    <option value="America/Sao_Paulo"></option>
                    <option value="America/Scoresbysund"></option>
                    <option value="America/Shiprock"></option>
                    <option value="America/Sitka"></option>
                    <option value="America/St_Barthelemy"></option>
                    <option value="America/St_Johns"></option>
                    <option value="America/St_Kitts"></option>
                    <option value="America/St_Lucia"></option>
                    <option value="America/St_Thomas"></option>
                    <option value="America/St_Vincent"></option>
                    <option value="America/Swift_Current"></option>
                    <option value="America/Tegucigalpa"></option>
                    <option value="America/Thule"></option>
                    <option value="America/Thunder_Bay"></option>
                    <option value="America/Tijuana"></option>
                    <option value="America/Toronto"></option>
                    <option value="America/Tortola"></option>
                    <option value="America/Vancouver"></option>
                    <option value="America/Virgin"></option>
                    <option value="America/Whitehorse"></option>
                    <option value="America/Winnipeg"></option>
                    <option value="America/Yakutat"></option>
                    <option value="America/Yellowknife"></option>
                    <option value="Antarctica/Casey"></option>
                    <option value="Antarctica/Davis"></option>
                    <option value="Antarctica/DumontDUrville"></option>
                    <option value="Antarctica/Macquarie"></option>
                    <option value="Antarctica/Mawson"></option>
                    <option value="Antarctica/McMurdo"></option>
                    <option value="Antarctica/Palmer"></option>
                    <option value="Antarctica/Rothera"></option>
                    <option value="Antarctica/South_Pole"></option>
                    <option value="Antarctica/Syowa"></option>
                    <option value="Antarctica/Troll"></option>
                    <option value="Antarctica/Vostok"></option>
                    <option value="Arctic/Longyearbyen"></option>
                    <option value="Asia/Aden"></option>
                    <option value="Asia/Almaty"></option>
                    <option value="Asia/Amman"></option>
                    <option value="Asia/Anadyr"></option>
                    <option value="Asia/Aqtau"></option>
                    <option value="Asia/Aqtobe"></option>
                    <option value="Asia/Ashgabat"></option>
                    <option value="Asia/Ashkhabad"></option>
                    <option value="Asia/Baghdad"></option>
                    <option value="Asia/Bahrain"></option>
                    <option value="Asia/Baku"></option>
                    <option value="Asia/Bangkok"></option>
                    <option value="Asia/Beirut"></option>
                    <option value="Asia/Bishkek"></option>
                    <option value="Asia/Brunei"></option>
                    <option value="Asia/Calcutta"></option>
                    <option value="Asia/Choibalsan"></option>
                    <option value="Asia/Chongqing"></option>
                    <option value="Asia/Chungking"></option>
                    <option value="Asia/Colombo"></option>
                    <option value="Asia/Dacca"></option>
                    <option value="Asia/Damascus"></option>
                    <option value="Asia/Dhaka"></option>
                    <option value="Asia/Dili"></option>
                    <option value="Asia/Dubai"></option>
                    <option value="Asia/Dushanbe"></option>
                    <option value="Asia/Gaza"></option>
                    <option value="Asia/Harbin"></option>
                    <option value="Asia/Hebron"></option>
                    <option value="Asia/Ho_Chi_Minh"></option>
                    <option value="Asia/Hong_Kong"></option>
                    <option value="Asia/Hovd"></option>
                    <option value="Asia/Irkutsk"></option>
                    <option value="Asia/Istanbul"></option>
                    <option value="Asia/Jakarta"></option>
                    <option value="Asia/Jayapura"></option>
                    <option value="Asia/Jerusalem"></option>
                    <option value="Asia/Kabul"></option>
                    <option value="Asia/Kamchatka"></option>
                    <option value="Asia/Karachi"></option>
                    <option value="Asia/Kashgar"></option>
                    <option value="Asia/Kathmandu"></option>
                    <option value="Asia/Katmandu"></option>
                    <option value="Asia/Khandyga"></option>
                    <option value="Asia/Kolkata"></option>
                    <option value="Asia/Krasnoyarsk"></option>
                    <option value="Asia/Kuala_Lumpur"></option>
                    <option value="Asia/Kuching"></option>
                    <option value="Asia/Kuwait"></option>
                    <option value="Asia/Macao"></option>
                    <option value="Asia/Macau"></option>
                    <option value="Asia/Magadan"></option>
                    <option value="Asia/Makassar"></option>
                    <option value="Asia/Manila"></option>
                    <option value="Asia/Muscat"></option>
                    <option value="Asia/Nicosia"></option>
                    <option value="Asia/Novokuznetsk"></option>
                    <option value="Asia/Novosibirsk"></option>
                    <option value="Asia/Omsk"></option>
                    <option value="Asia/Oral"></option>
                    <option value="Asia/Phnom_Penh"></option>
                    <option value="Asia/Pontianak"></option>
                    <option value="Asia/Pyongyang"></option>
                    <option value="Asia/Qatar"></option>
                    <option value="Asia/Qyzylorda"></option>
                    <option value="Asia/Rangoon"></option>
                    <option value="Asia/Riyadh"></option>
                    <option value="Asia/Saigon"></option>
                    <option value="Asia/Sakhalin"></option>
                    <option value="Asia/Samarkand"></option>
                    <option value="Asia/Seoul"></option>
                    <option value="Asia/Shanghai"></option>
                    <option value="Asia/Singapore"></option>
                    <option value="Asia/Taipei"></option>
                    <option value="Asia/Tashkent"></option>
                    <option value="Asia/Tbilisi"></option>
                    <option value="Asia/Tehran"></option>
                    <option value="Asia/Tel_Aviv"></option>
                    <option value="Asia/Thimbu"></option>
                    <option value="Asia/Thimphu"></option>
                    <option value="Asia/Tokyo"></option>
                    <option value="Asia/Ujung_Pandang"></option>
                    <option value="Asia/Ulaanbaatar"></option>
                    <option value="Asia/Ulan_Bator"></option>
                    <option value="Asia/Urumqi"></option>
                    <option value="Asia/Ust-Nera"></option>
                    <option value="Asia/Vientiane"></option>
                    <option value="Asia/Vladivostok"></option>
                    <option value="Asia/Yakutsk"></option>
                    <option value="Asia/Yekaterinburg"></option>
                    <option value="Asia/Yerevan"></option>
                    <option value="Atlantic/Azores"></option>
                    <option value="Atlantic/Bermuda"></option>
                    <option value="Atlantic/Canary"></option>
                    <option value="Atlantic/Cape_Verde"></option>
                    <option value="Atlantic/Faeroe"></option>
                    <option value="Atlantic/Faroe"></option>
                    <option value="Atlantic/Jan_Mayen"></option>
                    <option value="Atlantic/Madeira"></option>
                    <option value="Atlantic/Reykjavik"></option>
                    <option value="Atlantic/South_Georgia"></option>
                    <option value="Atlantic/St_Helena"></option>
                    <option value="Atlantic/Stanley"></option>
                    <option value="Australia/ACT"></option>
                    <option value="Australia/Adelaide"></option>
                    <option value="Australia/Brisbane"></option>
                    <option value="Australia/Broken_Hill"></option>
                    <option value="Australia/Canberra"></option>
                    <option value="Australia/Currie"></option>
                    <option value="Australia/Darwin"></option>
                    <option value="Australia/Eucla"></option>
                    <option value="Australia/Hobart"></option>
                    <option value="Australia/LHI"></option>
                    <option value="Australia/Lindeman"></option>
                    <option value="Australia/Lord_Howe"></option>
                    <option value="Australia/Melbourne"></option>
                    <option value="Australia/North"></option>
                    <option value="Australia/NSW"></option>
                    <option value="Australia/Perth"></option>
                    <option value="Australia/Queensland"></option>
                    <option value="Australia/South"></option>
                    <option value="Australia/Sydney"></option>
                    <option value="Australia/Tasmania"></option>
                    <option value="Australia/Victoria"></option>
                    <option value="Australia/West"></option>
                    <option value="Australia/Yancowinna"></option>
                    <option value="Brazil/DeNoronha"></option>
                    <option value="Brazil/East"></option>
                    <option value="Brazil/West"></option>
                    <option value="Canada/Atlantic"></option>
                    <option value="Canada/Central"></option>
                    <option value="Canada/Eastern"></option>
                    <option value="Canada/East_Saskatchewan"></option>
                    <option value="Canada/Mountain"></option>
                    <option value="Canada/Newfoundland"></option>
                    <option value="Canada/Pacific"></option>
                    <option value="Canada/Saskatchewan"></option>
                    <option value="Canada/Yukon"></option>
                    <option value="Chile/Continental"></option>
                    <option value="Chile/Easterlsland"></option>
                    <option value="Cuba"></option>
                    <option value="Egypt"></option>
                    <option value="Eire"></option>
                    <option value="Etc/GMT"></option>
                    <option value="Europe/Amsterdam"></option>
                    <option value="Europe/Andorra"></option>
                    <option value="Europe/Athens"></option>
                    <option value="Europe/Belfast"></option>
                    <option value="Europe/Belgrade"></option>
                    <option value="Europe/Berlin"></option>
                    <option value="Europe/Bratislava"></option>
                    <option value="Europe/Brussels"></option>
                    <option value="Europe/Bucharest"></option>
                    <option value="Europe/Budapest"></option>
                    <option value="Europe/Busingen"></option>
                    <option value="Europe/Chisinau"></option>
                    <option value="Europe/Copenhagen"></option>
                    <option value="Europe/Dublin"></option>
                    <option value="Europe/Gibrsjr"></option>
                    <option value="Europe/Guernsey"></option>
                    <option value="Europe/Helsinki"></option>
                    <option value="Europe/Isle_of_Man"></option>
                    <option value="Europe/Istanbul"></option>
                    <option value="Europe/Jersey"></option>
                    <option value="Europe/Kaliningrad"></option>
                    <option value="Europe/Kiev"></option>
                    <option value="Europe/Lisbon"></option>
                    <option value="Europe/Ljubljana"></option>
                    <option value="Europe/London"></option>
                    <option value="Europe/Luxembourg"></option>
                    <option value="Europe/Madrid"></option>
                    <option value="Europe/Msj"></option>
                    <option value="Europe/Mariehamn"></option>
                    <option value="Europe/Minsk"></option>
                    <option value="Europe/Monaco"></option>
                    <option value="Europe/Moscow"></option>
                    <option value="Europe/Nicosia"></option>
                    <option value="Europe/Oslo"></option>
                    <option value="Europe/Paris"></option>
                    <option value="Europe/Podgorica"></option>
                    <option value="Europe/Prague"></option>
                    <option value="Europe/Riga"></option>
                    <option value="Europe/Rome"></option>
                    <option value="Europe/Samara"></option>
                    <option value="Europe/San_Marino"></option>
                    <option value="Europe/Sarajevo"></option>
                    <option value="Europe/Simferopol"></option>
                    <option value="Europe/Skopje"></option>
                    <option value="Europe/Sofia"></option>
                    <option value="Europe/Stockholm"></option>
                    <option value="Europe/Tallinn"></option>
                    <option value="Europe/Tirane"></option>
                    <option value="Europe/Tiraspol"></option>
                    <option value="Europe/Uzhgorod"></option>
                    <option value="Europe/Vaduz"></option>
                    <option value="Europe/Vatican"></option>
                    <option value="Europe/Vienna"></option>
                    <option value="Europe/Vilnius"></option>
                    <option value="Europe/Volgograd"></option>
                    <option value="Europe/Warsaw"></option>
                    <option value="Europe/Zagreb"></option>
                    <option value="Europe/Zaporozhye"></option>
                    <option value="Europe/Zurich"></option>
                    <option value="Greenwich"></option>
                    <option value="Hongkong"></option>
                    <option value="Iceland"></option>
                    <option value="Indian/Antananarivo"></option>
                    <option value="Indian/Chagos"></option>
                    <option value="Indian/Christmas"></option>
                    <option value="Indian/Cocos"></option>
                    <option value="Indian/Comoro"></option>
                    <option value="Indian/Kerguelen"></option>
                    <option value="Indian/Mahe"></option>
                    <option value="Indian/Maldives"></option>
                    <option value="Indian/Mauritius"></option>
                    <option value="Indian/Mayotte"></option>
                    <option value="Indian/Reunion"></option>
                    <option value="Iran"></option>
                    <option value="Israel"></option>
                    <option value="Jamaica"></option>
                    <option value="Japan"></option>
                    <option value="Kwajalein"></option>
                    <option value="Libya"></option>
                    <option value="Mexico/BajaNorte"></option>
                    <option value="Mexico/BajaSur"></option>
                    <option value="Mexico/General"></option>
                    <option value="Navajo"></option>
                    <option value="Pacific/Apia"></option>
                    <option value="Pacific/Auckland"></option>
                    <option value="Pacific/Chatham"></option>
                    <option value="Pacific/Chuuk"></option>
                    <option value="Pacific/Easter"></option>
                    <option value="Pacific/Efate"></option>
                    <option value="Pacific/Enderbury"></option>
                    <option value="Pacific/Fakaofo"></option>
                    <option value="Pacific/Fiji"></option>
                    <option value="Pacific/Funafuti"></option>
                    <option value="Pacific/Galapagos"></option>
                    <option value="Pacific/Gambier"></option>
                    <option value="Pacific/Guadalcanal"></option>
                    <option value="Pacific/Guam"></option>
                    <option value="Pacific/Honolulu"></option>
                    <option value="Pacific/Johnston"></option>
                    <option value="Pacific/Kiritimati"></option>
                    <option value="Pacific/Kosrae"></option>
                    <option value="Pacific/Kwajalein"></option>
                    <option value="Pacific/Majuro"></option>
                    <option value="Pacific/Marquesas"></option>
                    <option value="Pacific/Midway"></option>
                    <option value="Pacific/Nauru"></option>
                    <option value="Pacific/Niue"></option>
                    <option value="Pacific/Norfolk"></option>
                    <option value="Pacific/Noumea"></option>
                    <option value="Pacific/Pago_Pago"></option>
                    <option value="Pacific/Palau"></option>
                    <option value="Pacific/Pitcairn"></option>
                    <option value="Pacific/Pohnpei"></option>
                    <option value="Pacific/Ponape"></option>
                    <option value="Pacific/Port_Moresby"></option>
                    <option value="Pacific/Rarotonga"></option>
                    <option value="Pacific/Saipan"></option>
                    <option value="Pacific/Samoa"></option>
                    <option value="Pacific/Tahiti"></option>
                    <option value="Pacific/Tarawa"></option>
                    <option value="Pacific/Tongatapu"></option>
                    <option value="Pacific/Truk"></option>
                    <option value="Pacific/Wake"></option>
                    <option value="Pacific/Wallis"></option>
                    <option value="Pacific/Yap"></option>
                    <option value="Poland"></option>
                    <option value="Portugal"></option>
                    <option value="Singapore"></option>
                    <option value="Turkey"></option>
                    <option value="US/Alaska"></option>
                    <option value="US/Aleutian"></option>
                    <option value="US/Arizona"></option>
                    <option value="US/Central"></option>
                    <option value="US/Eastern"></option>
                    <option value="US/East-Indiana"></option>
                    <option value="US/Hawaii"></option>
                    <option value="US/Indiana-Starke"></option>
                    <option value="US/Michigan"></option>
                    <option value="US/Mountain"></option>
                    <option value="US/Pacific"></option>
                    <option value="US/Samoa"></option>
                    <option value="Zulu"></option>

                </datalist>
            <FiPlus title="add clock" id="iconplus" onClick={addItem} />
            </p><br/>
            <div className="ShowItems">
            {
                items.map((elem ,ind)=>{
                    return(
                        <div className="EachItem" key={ind}>
                            <h4 id="SPh4">{elem}</h4><br/>
                            <FiTrash title="delete item" id="icontrash" onClick={()=>deleteItem(ind)} />
                        </div>

                    )

                })
            }
                
            </div>
            <div className="ShowItems">
            <button className="Btn" onClick={removeAll}><span>DELETE LIST</span></button>
            </div>
            <button id="SPfbtn" type="submit">SUBMIT</button>
            </form>
            <div id="SPbgimg"  style={{height: '70vh', width: '50vw',backgroundSize:'cover',backgroundPosition:'center', backgroundImage:'url(https://data.whicdn.com/images/333359093/original.jpg)'}}>
            <p id="SPbgtext">ENTER TIME ZONE & COMPANY NAME</p>
            </div>
        </div>
        </>
    )
}

export default SettingPage;