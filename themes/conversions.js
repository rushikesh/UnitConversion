var conv = [{name:"Inductance",unit:["Abhenry (abH)","Gigahenry (GH)","Henry (H)","Kilohenry (kH)","Megahenry (MH)","Microhenry (µH)","Millihenry (mH)","Nanohenry (nH)","Weber per ampere (Wb/A)"],factors:[1000000000,1.0E-9,1,0.001,1.0E-6,1000000,1000,1000000000,1]},{name:"Illuminance",unit:["Foot-candle (fc)","Kilolux (klx)","Lumen per square centimeter (lm/cm²)","Lumen per square meter (lm/m²)","Lux (lx)","Microlux (µlx)","Millilux (mlx)","Nox","Phot (ph)"],num:[0.09290304,0.001,0.0001,1,1,1000000,1000,1000,0.0001]},{name:"Force",unit:["attonewton","centinewton","decigram-force","decinewton","dekagram-force","dekanewton","dyne (dyn)","exanewton","femtonewton","giganewton (GN)","gram-force","hectonewton","joule / meter (J/m)","kilogram-force (kgf)","kilonewton (kN)","kilopond (kp)","kip (kip)","meganewton","megapond","micronewton (µN)","millinewton (mN)","nanonewton (nN)","newton (N)","ounce-force (ozf)","petanewton","piconewton","pond","pound-force (lbf)","poundal (pdl)","sthene (sn)","teranewton","ton-force (long)(tnf)","ton-force (metric)(tnf)","ton-force (short)(tnf)","yoctonewton","yottanewton","zeptonewton","zettanewton"],num:[1.0E+19,100,1019.716213,10,10.19716213,0.1,100000,1.0E-17,1.0E+16,1.0E-8,101.9716213,0.01,1,0.1019716,0.001,0.1019716,0.0002248,1.0E-5,0.0001019716213,1000000,1000,1000000000,1,3.5969431019,1.0E-14,1000000000000,101.9716213,0.22480894387,7.2330140801,0.001,1.0E-11,0.00010036113566,0.0001019716213,0.00011240447194,1.0E+25,1.0E-23,1.0E+22,1.0E-20]},{name:"Energy and Work",unit:["BTU","calorie (cal)","electronvolt (eV)","erg","foot-pound","gigajoule (GJ)","joule (J)","kilocalorie (kcal)","kilojoule (kJ)","kilowatt hour (kWh)","megajoule (MJ)","nutrition calorie (Cal)","ton of TNT (tn)","watt hour (Wh)"],num:[0.00094781698791344,0.2388458966275,6.2415097445115E+18,10000000,0.73756214927727,1.0E-9,1,0.0002388458966275,0.001,2.7777777777778E-7,1.0E-6,0.0002388458966275,2.3900573613767E-10,0.00027777777777778]},{name:"Electrical resistance",unit:["Abohm (abΩ)","Gigaohm (GΩ)","Kiloohm (kΩ)","Megaohm (MΩ)","Microohm (µΩ)","Milliohm (mΩ)","Nanoohm (nΩ)","Ohm (Ω)","Volt per ampere (V/A)"],num:[1000000000,1.0E-9,0.001,1.0E-6,1000000,1000,1000000000,1,1]},{name:"Electric Charge",unit:["Abcoulomb (abC)","Ampere-hour (Ah)","Coulomb (C)","Elementary charge (e)","Faraday (F)","Kilocoulomb (kC)","Megacoulomb (MC)","Microcoulomb (µC)","Milliampere-hour (mAh)","Millicoulomb (mC)","Nanocoulomb (nC)","Statcoulomb (statC)"],num:[0.1,0.000277777777778,1,6241509474153816705,1.036426864904E-5,0.001,1.0E-6,1000000,0.277777777778,1000,1000000000,2997924580]},{name:"Dynamic Viscosity",unit:["Centipoise (cP)","Gram per centimeter second (g/(cm·s))","Kilogram per metre second (kg/(m·s))","Newton second per square metre (N·s/m²)","Pascal-second (Pa·s)","Poise (P)","Pound-force second per square inch (lbf·s/in²)","Pound-force second per square foot (lbf·s/ft²)","Pound per foot second (lb/(ft·s))","Pound per foot hour (lb/(ft·h))","Slug per foot second (slug/(ft·s))","Poundal second per square foot","Dyne second per square centimetre (dyn·s/cm²)"],num:[1000,10,1,1,1,10,0.000145037737797,0.0208854342332,0.67196897514,2419.088310502,0.0208854342332,0.10197162129779,10]},{name:"Density",unit:["gram / cubic centimeter (g/cm³)","gram / cubic decimeter","gram / cubic meter (g/m³)","gram / liter","gram / milliliter","megagram / cubic centimeter","megagram / cubic meter","megagram / liter","megagram / milliliter","milligram / cubic centimeter (mg/cm³)","milligram / cubic decimeter","milligram / cubic meter (mg/m³)","milligram / liter","milligram / milliliter","kilogram / cubic centimeter (kg/cm³)","kilogram / cubic decimeter","kilogram / cubic meter (kg/m³)","kilogram / liter","kilogram / milliliter","ounce / cubic foot","ounce / cubic inch","ounce / cubic yard","ounce / gallon (U.K.)(oz/gal)","ounce / gallon (U.S.)(oz/gal)","pound / circular mil foot","pound / cubic foot (lb/ft³)","pound / cubic inch (lb/in³)","pound / cubic yard","pound / gallon (U.K.)(lb/gal)","pound / gallon (U.S.)(lb/gal)","grain / cubic foot","grain / cubic inch","grain / cubic yard","grain / gallon (U.K.)","grain / gallon (U.S.)","tonne / cubic centimeter","tonne / cubic decimeter","tonne / cubic meter","tonne / liter","tonne / milliliter"],num:[1,1000,1000000,1000,1,1.0E-5,1,0.001,1.0E-5,1000,1000000,1000000000,1000000,1000,0.001,1,1000,1,0.001,998.84737348,0.57803667444,26968.879083,160.35860568,133.5264718,340.4917061,62.427960841,0.036127292153,1685.5549427,10.022412855,8.3454044873,436995.72588,252.89104507,11798884.599,70156.889986,58417.831411,1.0E-5,0.001,1,0.001,1.0E-5]},{name:"IT Data Transfer",unit:["bit / second (bit/s)","byte / second (B/s)","kilobit / second (Kbit/s)","kilobyte / second (KB/s)","megabit / second (Mbit/s)","megabyte / second (MB/s)","gigabit / second (Gbit/s)","gigabyte / second (GB/s)","byte / minute (B/min)","byte / hour (B/h)","kilobyte / minute (KB/min)","kilobyte / hour (KB/h)","megabyte / minute (MB/min)","megabyte / hour (MB/h)"],num:[8589934592,1073741824,8388608,1048576,8192,1024,8,1,64424509440,3865470566400,62914560,3774873600,61440,3686400]},{name:"Cooking",unit:["cup [US]","dash","dessertspoon [US]","dessertspoon [UK]","dram[US fluid]","dram[UK fluid]","drop","fifth","fluid ounce [US fluid, fl oz]","fluid ounce [UK fluid, fl oz]","gallon [US, fluid]","gallon [US, dry]","gallon [UK]","gill [US]","gill [UK]","liter","milliliter","pint [US, fluid]","pint [US, dry]","pint [UK]","quart [US, fluid]","quart [US, dry]","quart [UK]","tablepoon [US]","tablepoon [Food and Drug Administration]","teaspoon [US]","teaspoon [Food and Drug Administration]"],num:[0.0042267528377304,1.62307308967,0.10144206811,0.0844681564,0.27051218161474,0.28156063782283,19.476877076,0.0013208602617907,0.033814022701843,0.035195079727854,0.00026417205235815,0.00022701947930426,0.00021996924829909,0.0084535056754607,0.0070390159455708,0.001,1,0.0021133764188652,0.0018161558344341,0.0017597539863927,0.0010566882094326,0.00090807791721705,0.00087987699319635,0.067628045403686,0.066666666666667,0.20288413621106,0.2]},{name:"Computer Data",unit:["bit (bit)","byte (B)","kilobit (Kbit)","kilobyte (KB)","megabit (Mbit)","megabyte (MB)","gigabit (Gbit)","gigabyte (GB)","terabit (Tbit)","terabyte (TB)","petabit (Pbit)","petabyte (PB)","floppy disk (3.5&quot;, DD)","floppy disk (3.5&quot;, HD)","floppy disk (5.25&quot;, DD)","floppy disk (5.25&quot;, HD)","Zip 100","Zip 250","Jaz 1GB","Jaz 2GB","CD (74 minute)","CD (80 minute)","DVD (1 layer)","DVD (2 layer)","Blu-ray (1 layer)","Blu-ray (2 layer)","HD-DVD (1 layer)","HD-DVD (2 layer)"],num:[8589934592,1073741824,8388608,1048576,8192,1024,8,1,0.0078125,0.0009766,7.6293945E-6,2.5367432,1473.23639,736.6181945,2946.4727757,884.5010542,10.6912457,4.2764983,1,0.5,1.5765784,1.458335,0.212766,0.1176471,0.04,0.02,0.06666666666,0.0333333]},{name:"Capacitance",unit:["Abfarad (abF)","Attofarad (aF)","Centifarad (cF)","Coulomb per volt","Decafarad (daF)","Decifarad (dF)","Exafarad (EF)","Farad (F)","Femtofarad (fF)","Gigafarad (GF)","Hectofarad (hF)","Kilofarad (kF)","Megafarad (MF)","Microfarad (µF)","Millifarad (mF)","Nanofarad (nF)","Petafarad (PF)","Picofarad (pF)","Statfarad (statF)","Terafarad (TF)","Yoctofarad (yF)","Yottafarad (YF)","Zeptofarad (zF)","Zettafarad (ZF)"],num:[1.0E-9,1000000000000000000,100,1,0.1,10,1.0E-18,1,1000000000000000,1.0E-9,0.01,0.001,1.0E-6,1000000,1000,1000000000,1.0E-15,1000000000000,898755178736.5,1.0E-12,1.0E+24,1.0E-24,1.0E+21,1.0E-21]},{name:"Blood Sugar",unit:["mmol / l","mg / dl","mg%"],num:[1,18,18]},{name:"astronomical",unit:["parsec","astronomical unit (AU)","kilometer (km)","meter (m)","mile (mi)","light-year (Julian)","light-year (Gregorian)","light-year (traditional)","light-year (tropical / solar)","light-week","light-day","light-hour","light-minut","light-second"],num:[0.00083942886143515,173.14463271251,25902068370,25902068370000,16090000000,0.0027378507871321,0.0027379070069885,0.0027397260273973,0.0027379092649011,0.14285714285714,1,24,1440,86400]},{name:"Area",unit:["acre","are (a)","barn (b)","hectare (ha)","homestead","rood","square centimeter (cm²)","square foot (ft²)","square inch (in²)","square kilometer (km²)","square meter (m²)","square mile","square millimeter (mm²)","square rod","square yard (yd²)","township (twp)"],num:[0.00024710538146717,0.01,1.0E+28,0.0001,1.5444086341698E-6,0.00098842152586866,10000,10.76391041671,1550.0031000062,1.0E-6,1,3.8610215854245E-7,1000000,0.039536861034746,1.1959900463011,1.0725059959512E-8]},{name:"Angle",unit:["degrees (deg)","full circle","grad","radians (rad)"],num:[57.295779513082,0.1591549430919,63.661977236758,1]},{name:"Amount of Substance",unit:["millimole(mmol)","mol(mol)","gram-mole(g-mol)","kilomole(kmol)","pound mole(lb-mol)"],num:[1000,1,1,0.001,0.002204622621849]},{name:"Acceleration",unit:["meter / square second (m/sec²)","centimeter / square second (cm/sec²)","foot / square second (ft/sec²)","standard gravity (grav)","gal(cm/s²)","g-unit","kilometer / square hour (km/h²)","kilometer / hour second(km/h-s)","mile / hour minute(mi/h-min)","mile / hour second (mi/hr-s)","mile / square second (mi/sec²)","inch / square second (in/s²)"],num:[1,100,3.280839895,0.1019716213,100,0.1019716213,12960,3.6,134.21617752,2.2369362921,0.00062137119224,39.37007874]},{name:"Length",unit:["angstrom","astronomical unit (au)","centimeter (cm)","chain","decimeter (dm)","fathom","foot (ft)","furlong","inch (in)","kilometer (km)","league","light year","meter (m)","mile (mi)","millimeter (mm)","micrometer (µm)","micron (µ)","nanometer (nm)","nautical mile","parsec","rod","yard (yd)"],num:[10000000000,6.6845871226706E-12,100,0.049709695378987,10,0.54680664916885,3.2808398950131,0.0049709695378987,39.370078740157,0.001,0.00020712373074577,1.0570008340246E-16,1,0.00062137119223733,1000,1000000,1000000,1000000000,0.00053995680345572,3.2407792896393E-17,0.19883878151595,1.0936132983377]},{name:"Weight",unit:["atomic mass unit (amu)","carat (metric)","cental","centigram","dekagram","dram (dr)","grain (gr)","gram (g)","hundredweight (UK)","kilogram (kg)","microgram (µg)","milligram (mg)","newton (Earth)","ounce (oz)","pennyweight (dwt)","pound (lb)","quarter","stone","ton (UK, long)","ton (US, short)","tonne (t)","troy ounce"],num:[6.0221366516752E+26,5000,0.022046226218488,100000,100,564.38339119329,15432.358352941,1000,0.019684130552221,1,1000000000,1000000,9.80665,35.27396194958,643.01493137256,2.2046226218488,0.078736522208885,0.15747304441777,0.00098420652761106,0.0011023113109244,0.001,32.150746568628]},{name:"Luminance",unit:["Candela per square centimeter (cd/cm²)","Candela per square foot (cd/ft²)","Candela per square meter (cd/m²)","Foot-lambert (fL)","Kilocandela per square meter (kcd/m²)","Lambert (L)","Nit","Stilb"],num:[0.0001,0.09290304,1,0.291863508,0.001,0.000314159265359,1,0.0001]},{name:"Luminous Energy",unit:["Lumen hour (lm·h)","Lumen minute (lm·min)","Lumen second (lm·s)","Talbot (T)"],num:[0.00027777777777778,0.016666666666667,1,1]},{name:"Luminous Intensity",unit:["Candela (cd)","Lumen per steradian (lm/sr)","Hefnerkerze (HK)","Candlepower"],num:[1,1,1.1069676153091,1.0193679918451]},{name:"Magnetic Field",unit:["Gamma (γ)","Gauss (G)","Kilotesla (kT)","Line per square centimetre","Maxwell per square centimetre (Mw/cm²)","Megatesla","Microtesla (µT)","Millitesla (mT)","Nanotesla (nT)","Picotesla (pT)","Tesla (T)","Weber per square metre (Wb/m²)"],num:[1000000000,10000,0.001,10000,10000,1.0E-6,1000000,1000,1000000000,1000000000000,1,1]},{name:"Magnetic Field Strength",unit:["Ampere per meter (A/m)","Ampere-turn per meter (AT/m)","Gilbert per meter (Gi/m)","Oersted (Oe)"],num:[79.577471545948,79.577471545948,100,1]},{name:"Magnetic Flux",unit:["Gauss square centimeter (G·cm²)","Magnetic flux quantum","Maxwell (Mw)","Microweber (µWb)","Milliweber (mWb)","Nanoweber (nWb)","Tesla square meter (T·m²)","Volt-second (Vs)","Weber (Wb)"],num:[100000000,4.835978981048E+14,100000000,1000000,1000,1000000000,1,1,1]},{name:"Magnetomotive Force",unit:["Ampere-turn (AT)","Gilbert (Gi)"],num:[1,1.2566370614359]},{name:"Metric",unit:["yocto (y)","zepto (z)","atto (a)","femto (f)","pico (p)","nano (n)","micro (µ)","milli (m)","centi (c)","deci (d)","base","deka (da)","hecto (h)","kilo (k)","mega (M)","giga (G)","tera (T)","peta (P)","exa (E)","zetta (Z)","yotta (Y)"],num:[1.0E+24,1.0E+21,1.0E+18,1.0E+15,1000000000000,1000000000,1000000,1000,100,10,1,0.1,0.01,0.001,1.0E-6,1.0E-9,1.0E-12,1.0E-15,1.0E-18,1.0E-21,1.0E-24]},{name:"Molar Mass",unit:["Chlorine (Cl) - standard atomic weight","Chlorine molecule (Cl₂) - molecular mass","Gram per mole (g/mol)","Hydrogen (H) - standard atomic weight","Hydrogen molecule (H₂) - molecular mass","Iron (Fe) - standard atomic weight","Kilogram per mole (kg/mol)","Oxygen (O) - standard atomic weight","Sulfur (S) - standard atomic weight","Sulfur molecule (S₈) - molecular mass","Table salt (sodium chloride) (NaCl) - molecular mass","Table sugar (sucrose) (C₁₂H₂₂O₁₁) - molecular mass","Water molecule (H₂O) - molecular mass"],num:[0.028206357713029,0.014103178856514,1,0.992122546977,0.4960612734885,0.01790670606142,0.001,0.062502343837894,0.031186652112896,0.003898331514112,0.017110756596919,0.0029214440066693,0.055508435061792]},{name:"Power",unit:["BTU/hour","BTU/second","calories per second","erg per second","foot pound per second (ft·lbf/s)","gigawatt (GW)","horsepower (hp)","kilocalorie (Calorie) per second","kilowatt (kW)","megawatt (MW)","milliwatt (mW)","watt (joules/s) (W)"],num:[3.4121411564884,0.00094781698791344,0.2388458966275,10000000,0.73756214927727,1.0E-9,0.001341022089595,0.0002388458966275,0.001,1.0E-6,1000,1]},{name:"Pressure",unit:["atmosphere (atm)","bar (b)","hectopascal (hPa)","kilogram per sq. cm (kgf/cm²)","kilogram per sq. meter (kgf/m²)","kilopascal (kPa)","millibar","millimeter of mercury (mmHg) ","pascal (Pa)","pounds per square foot (psf)","pounds per square inch (psi)","torr (Torr)"],num:[0.98692326671601,1,1000,1.0197162129779,10197.162129779,100,1000,750.06168270417,100000,2088.5456325465,14.503789114906,750.06168270417]},{name:"Radioactive Decay",unit:["Becquerel (Bq)","Curie (Ci)","Disintegrations per minute (dpm)","Gigabecquerel (GBq)","Kilobecquerel (kBq)","Megabecquerel (MBq)","Rutherford (Rd)","Terabecquerel (TBq)"],num:[1,2.702702702E-11,60,1.0E-9,0.001,1.0E-6,1.0E-6,1.0E-12]},{name:"Radioactivity Equivalent Dose",unit:["Dental radiography","Microsievert (µSv)","Millirem (mrem)","Millisievert (mSv)","Röntgen equivalent man (rem)","Sievert (Sv)"],num:[200000,1000000,100000,1000,100,1]},{name:"Speed",unit:["centimeter / second (cm/s)","foot / second (ft/s)","kilometer / hour (km/h)","kilometer / minute (km/min)","kilometer / second (km/s)","knot (kn)","mach (at std. atm.) (M)","meter / minute (m/min)","meter / second (m/s)","mile / hour (mph)","speed of light","speed of sound (at std. atm.)","yard / second"],num:[100,3.2808398950131,3.6,0.06,0.001,1.9438444924406,0.0029154518950437,60,1,2.2369362920544,3.3356409519815E-9,0.0029154518950437,1.0936132983377]},{name:"Time",unit:["millennium","century","decade","Julian year","Gregorian year","tropical year","year","month","fortnight","week","day","hour","minute","second","millisecond","microsecond","nanosecond"],num:[2.7397260273973E-6,2.7397260273973E-5,0.00027397260273973,0.0027378507871321,0.0027379070069885,0.0027379092633269,0.0027397260273973,0.032853922534821,0.071428571428571,0.14285714285714,1,24,1440,86400,86400000,86400000000,86400000000000]},{name:"Volume",unit:["barrel (petroleum) (bbl, bo)","bushel (UK) (bu)","bushel (US dry) (bu)","centiliter (cl)","cubic centimeter (cc, cm³)","cubic decimeter (dm³)","cubic foot (ft³, cu ft)","cubic inch (in³, cu in) ","cubic meter (m³)","cubic millimeter (mm³)","cubic yard (yd³)","dekaliter (dal)","fluid dram (fl dr)","fluid ounce (fl oz)","fluid ounce (UK) (fl oz)","gallon (fluid) (gal)","gallon (UK) (gal)","gill (gi)","hectoliter (hl)","liter (l)","microliter (µl)","milliliter (ml)","minim (min)","peck (US dry) (pk)","pint (fluid) (pt)","pint (UK) (pt)","pint (US dry) (pt)","quart (fluid) (qt)","quart (UK) (qt)","quart (US dry) (qt)"],num:[6.2898107704321,27.496156037386,28.377593258402,100000,1000000,1000,35.314666721489,61023.744094732,1,1000000000,1.3079506193144,100,270512.18161474,33814.022701843,35195.079727854,264.17205235815,219.96924829909,8453.5056754608,10,1000,1000000000,1000000,16230730.896885,113.51037303361,2113.3764188652,1759.7539863927,1816.1659685377,1056.6882094326,879.87699319635,908.08298426886]}];