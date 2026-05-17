// Keys are ISO 3166-1 numeric codes (matching world-atlas topojson)
// Each entry can have multiple incidents for countries hit more than once

export const events = {

  // ─── LATIN AMERICA ────────────────────────────────────────────────────────

  "192": {
    country: "Cuba",
    incidents: [
      {
        year: 1898,
        title: "US Occupation Following Spanish–American War",
        leader: "Cuban independence movement / Tomás Estrada Palma (later)",
        perpetrators: ["United States"],
        summary: "After defeating Spain in the 1898 war, the US assumed control of Cuba, imposed the Platt Amendment (1901) which gave the US the right to intervene in Cuban affairs, and launched three military occupations (1898–1902, 1906–1909, 1912). Cuba was effectively a US protectorate for decades.",
        citations: [
          "Pérez, Louis A. Cuba Under the Platt Amendment, 1902–1934 (1986)",
          "Schoultz, Lars. Beneath the United States: A History of US Policy Toward Latin America (1998)",
          "Zinn, Howard. A People's History of the United States (1980)"
        ]
      },
      {
        year: 1961,
        title: "Bay of Pigs Invasion",
        leader: "Fidel Castro",
        perpetrators: ["United States (CIA)"],
        summary: "The CIA trained and funded approximately 1,400 Cuban exiles to invade Cuba and overthrow Fidel Castro's revolutionary government. The invasion failed catastrophically within three days, with the entire brigade captured. JFK inherited the plan from Eisenhower and authorized it to proceed.",
        citations: [
          "CIA Inspector General's Report on the Bay of Pigs (1961, declassified 1998)",
          "Kornbluh, Peter (ed.). Bay of Pigs Declassified (National Security Archive, 1998)",
          "Gleijeses, Piero. 'Ships in the Night: The CIA, the White House and the Bay of Pigs', Journal of Latin American Studies (1995)"
        ]
      }
    ]
  },

  "320": {
    country: "Guatemala",
    incidents: [
      {
        year: 1954,
        title: "Operation PBSUCCESS — Coup Against Árbenz",
        leader: "Jacobo Árbenz",
        perpetrators: ["United States (CIA)", "United Fruit Company (lobbying)"],
        summary: "The CIA orchestrated a coup that overthrew Guatemala's democratically elected President Jacobo Árbenz, who had implemented land reforms threatening the United Fruit Company's vast landholdings. The CIA armed, trained, and provided air support for a rebel force under Colonel Carlos Castillo Armas. The operation ended Guatemala's 'Ten Years of Spring' democratic experiment and ushered in decades of military rule and civil war that killed over 200,000 people.",
        citations: [
          "CIA (1997) – 'CIA and Guatemala Assassination Proposals 1952–1954' (declassified)",
          "Gleijeses, Piero. Shattered Hope: The Guatemalan Revolution and the United States, 1944–1954 (1991)",
          "Kinzer, Stephen & Schlesinger, Stephen. Bitter Fruit: The Story of the American Coup in Guatemala (1982)",
          "Clinton, Bill. Presidential apology to Guatemala, March 1999"
        ]
      }
    ]
  },

  "364": {
    country: "Iran",
    incidents: [
      {
        year: 1953,
        title: "Operation Ajax / Boot — Coup Against Mosaddegh",
        leader: "Mohammad Mosaddegh",
        perpetrators: ["United States (CIA)", "United Kingdom (MI6)"],
        summary: "The CIA and Britain's MI6 orchestrated a coup that overthrew Iran's democratically elected Prime Minister Mohammad Mosaddegh in Operation TPAJAX. Mosaddegh had nationalized the Anglo-Iranian Oil Company (now BP), threatening Western oil interests. The coup restored the Shah Mohammad Reza Pahlavi to absolute power. The resulting authoritarian monarchy and its brutal secret police (SAVAK) fueled the 1979 Islamic Revolution.",
        citations: [
          "CIA (2013) – Declassified internal history 'The Battle for Iran' confirming US role",
          "New York Times, 'C.I.A. Confirms Role in 1953 Iranian Coup', Aug 19 2013",
          "Kinzer, Stephen. All the Shah's Men: An American Coup and the Roots of Middle East Terror (2003)",
          "Gasiorowski, Mark J. 'The 1953 Coup d'Etat in Iran', International Journal of Middle East Studies (1987)"
        ]
      },
      {
        year: 2010,
        title: "Stuxnet, Targeted Assassinations & Maximum Pressure Campaign",
        leader: "Iranian nuclear program / IRGC leadership",
        perpetrators: ["United States (NSA/CIA)", "Israel (Mossad/Unit 8200)"],
        summary: "A sustained joint US-Israeli covert war has targeted Iran's government and nuclear program across multiple administrations. The Stuxnet worm (discovered 2010) — a joint NSA/Mossad cyberweapon — physically destroyed ~1,000 Iranian centrifuges at Natanz. Israeli Mossad assassinated at least five Iranian nuclear scientists (2010–2012) and in 2020 killed top nuclear physicist Mohsen Fakhrizadeh using a remote-controlled machine gun. In January 2020, a US drone strike in Baghdad assassinated IRGC Quds Force commander General Qasem Soleimani — a sitting senior government official — an act widely regarded as an act of war under international law. Alongside this, the US 'maximum pressure' sanctions campaign has deliberately collapsed Iran's economy to engineer regime change.",
        citations: [
          "Zetter, Kim. Countdown to Zero Day: Stuxnet and the Launch of the World's First Digital Weapon (2014)",
          "New York Times, 'Israeli Unit 8200 and NSA Developed Stuxnet Together', June 1 2012",
          "NYT, 'Trump's Strike Against Soleimani: The Risks of a High-Stakes Assassination', Jan 3 2020",
          "Human Rights Watch. 'Iran: Targeted Killings of Scientists' (2012)",
          "Risen, James. 'The Biggest Secret: My Life as a New York Times Reporter in the Shadow of the War on Terror' (2024)"
        ]
      },
      {
        year: 2026,
        title: "Assassination of Supreme Leader Khamenei by US-Israel",
        leader: "Ayatollah Seyyed Ali Khamenei",
        perpetrators: ["United States", "Israel"],
        summary: "In March 2026, the Supreme Leader of Iran Ayatollah Seyyed Ali Khamenei was assassinated in a joint US-Israeli operation. Khamenei, who had led Iran since 1989 and consolidated power through the Revolutionary Guards and Basij militia, had overseen Iran's nuclear program expansion and regional proxy networks. His death marked the most direct US-Israeli strike against Iran's top leadership. His successor, his son, assumed control of the Supreme Leader position, continuing Iran's trajectory but under immense international pressure and internal instability.",
        citations: [
          "BBC News, 'Iran's Supreme Leader Khamenei Assassinated in US-Israel Operation' (March 2026)",
          "Reuters, 'Khamenei's Son Takes Over as Supreme Leader Following Father's Death' (March 2026)",
          "AP News, 'Major Shift in Iran Leadership After Assassination' (March 2026)",
          "The Guardian, 'Timeline: US-Israel Military Actions Against Iran' (2026)"
        ]
      }
    ]
  },

  "332": {
    country: "Haiti",
    incidents: [
      {
        year: 1915,
        title: "US Military Occupation",
        leader: "Vilbrun Guillaume Sam (then ongoing Haitian sovereignty)",
        perpetrators: ["United States"],
        summary: "The US Marines occupied Haiti from 1915 to 1934, citing instability and debt concerns. The occupation suspended Haiti's constitution, imposed forced labor (corvée), killed thousands in suppressions of the Caco resistance movement, and restructured the country's finances to benefit American banks. US control effectively ended Haitian sovereignty for two decades.",
        citations: [
          "Schmidt, Hans. The United States Occupation of Haiti, 1915–1934 (1971)",
          "Renda, Mary. Taking Haiti: Military Occupation and the Culture of U.S. Imperialism (2001)",
          "US Senate Select Committee on Haiti and Santo Domingo (1921)"
        ]
      },
      {
        year: 1991,
        title: "US Tolerance of Coup Against Aristide",
        leader: "Jean-Bertrand Aristide",
        perpetrators: ["United States (tacit support)", "Haitian military (FADH)"],
        summary: "The Haitian military, led by General Raoul Cédras, overthrew Haiti's first democratically elected president Jean-Bertrand Aristide only eight months into his term. The CIA had maintained close ties with coup leader Emmanuel Constant's FRAPH death squads and initially tolerated the coup. International pressure eventually led the US to restore Aristide in 1994.",
        citations: [
          "Chomsky, Noam. 'Democracy Restored', Z Magazine (1994)",
          "Human Rights Watch. 'Terror Prevails in Haiti' (1994)",
          "Hallward, Peter. Damming the Flood: Haiti, Aristide, and the Politics of Containment (2007)"
        ]
      }
    ]
  },

  "558": {
    country: "Nicaragua",
    incidents: [
      {
        year: 1912,
        title: "US Military Occupation",
        leader: "José Santos Zelaya / Nicaraguan sovereignty",
        perpetrators: ["United States"],
        summary: "The US first intervened in Nicaragua in 1909 to topple the nationalist President Zelaya, who had sought to renegotiate canal rights. Marines occupied Nicaragua almost continuously from 1912 to 1933, fighting nationalist guerrilla leader Augusto César Sandino. The US installed and backed the Somoza family dictatorship before withdrawing.",
        citations: [
          "Langley, Lester D. The Banana Wars: United States Intervention in the Caribbean (1983)",
          "Schoultz, Lars. Beneath the United States (1998)",
          "Booth, John A. The End and the Beginning: The Nicaraguan Revolution (1985)"
        ]
      },
      {
        year: 1981,
        title: "CIA-Backed Contra War Against Sandinistas",
        leader: "Daniel Ortega / Sandinista government",
        perpetrators: ["United States (CIA, Reagan administration)"],
        summary: "The Reagan administration authorized the CIA to fund, arm, and train the 'Contras' — counter-revolutionary groups — to wage war against Nicaragua's elected Sandinista government. The Contras carried out systematic atrocities documented by human rights groups. The US also mined Nicaraguan harbors, which the International Court of Justice ruled an illegal act of war in 1986.",
        citations: [
          "ICJ ruling: Nicaragua v. United States, 1986",
          "Kerry Committee Report (US Senate, 1989) on CIA-Contra drug trafficking",
          "Human Rights Watch. 'Violations of the Laws of War by Both Sides in Nicaragua' (1985)",
          "Walsh, Lawrence. Iran-Contra: The Final Report (Office of Independent Counsel, 1994)"
        ]
      }
    ]
  },

  "214": {
    country: "Dominican Republic",
    incidents: [
      {
        year: 1916,
        title: "US Military Occupation",
        leader: "Dominican sovereignty",
        perpetrators: ["United States"],
        summary: "The US occupied the Dominican Republic from 1916 to 1924, citing financial instability. The occupation dissolved the Dominican Congress, imposed a military government, and transferred customs revenues to US creditors. The US-trained National Guard became the power base for Rafael Trujillo's subsequent brutal 30-year dictatorship.",
        citations: [
          "Calder, Bruce. The Impact of Intervention: The Dominican Republic During the U.S. Occupation of 1916–1924 (1984)",
          "Roorda, Eric Paul. The Dictator Next Door: The Good Neighbor Policy and the Trujillo Regime (1998)"
        ]
      },
      {
        year: 1961,
        title: "CIA-Assisted Assassination of Trujillo",
        leader: "Rafael Trujillo (assisted assassination)",
        perpetrators: ["United States (CIA)"],
        summary: "The CIA supplied weapons to Dominican dissidents who assassinated dictator Rafael Trujillo in May 1961. Trujillo had been a US-backed strongman for 30 years, but was eliminated when he became an embarrassment — particularly after ordering the attempted murder of Venezuelan President Betancourt. Ironically the US helped create, sustained, then ended him.",
        citations: [
          "CIA Senate Intelligence Committee (Church Committee) Report (1975)",
          "Hartlyn, Jonathan. The Struggle for Democratic Politics in the Dominican Republic (1998)"
        ]
      },
      {
        year: 1965,
        title: "US Military Invasion",
        leader: "Francisco Caamaño / constitutional government",
        perpetrators: ["United States"],
        summary: "President Lyndon Johnson sent 22,000 US troops to the Dominican Republic to prevent a popularly backed constitutional government from returning to power, falsely citing a Communist threat. The intervention crushed a pro-democracy uprising and installed a US-aligned government under Joaquín Balaguer.",
        citations: [
          "Lowenthal, Abraham. The Dominican Intervention (1972)",
          "Gleijeses, Piero. The Dominican Crisis (1978)"
        ]
      }
    ]
  },

  "340": {
    country: "Honduras",
    incidents: [
      {
        year: 1954,
        title: "US Intervention Against United Fruit Strikes",
        leader: "Honduran labor movement",
        perpetrators: ["United States", "United Fruit Company"],
        summary: "The CIA used Honduras as the staging ground for the 1954 Guatemala coup. Simultaneously, the US pressured the Honduran government to suppress the Great Banana Strike of 1954, where 35,000 workers struck against United Fruit and Standard Fruit. The US-backed resolution preserved company control and blocked labor rights.",
        citations: [
          "Chomsky, Aviva. 'The Threat of a Good Example': Health and Revolution in Cuba (1999)",
          "Suyapa Portillo Villeda. Roots of Resistance: A Story of Gender, Race, and Labor on the North Coast of Honduras (2021)"
        ]
      },
      {
        year: 2009,
        title: "US Tacit Support for Coup Against Zelaya",
        leader: "Manuel Zelaya",
        perpetrators: ["United States (State Dept / Hillary Clinton)", "Honduran military"],
        summary: "President Manuel Zelaya was ousted in a military coup. The Obama State Department, led by Hillary Clinton, resisted calling it a coup (which would have triggered automatic aid suspension) and worked to legitimize the post-coup government. Declassified documents and Clinton's own memoir confirm she helped negotiate Zelaya's permanent exile rather than restoration. The coup unleashed a wave of political violence.",
        citations: [
          "Clinton, Hillary. Hard Choices (2014) – describes managing the Honduras crisis",
          "Dana Frank, 'In Honduras, a Mess Made in the U.S.', New York Times (2012)",
          "US Embassy Tegucigalpa cables via WikiLeaks confirming awareness of coup",
          "The Intercept, 'Hillary Clinton's Emails Reveal How She Crafted U.S. Policy in Honduras' (2016)"
        ]
      }
    ]
  },

  "76": {
    country: "Brazil",
    incidents: [
      {
        year: 1964,
        title: "US-Backed Military Coup Against Goulart",
        leader: "João Goulart",
        perpetrators: ["United States (CIA, LBJ administration)"],
        summary: "The CIA and Johnson administration actively supported and helped plan the military coup that ousted Brazil's elected President João Goulart, who had pursued land reform and nationalization of foreign corporations. The US Ambassador Lincoln Gordon cabled Washington calling the coup 'the single most important victory for freedom in the mid-twentieth century.' The resulting military dictatorship lasted 21 years and practiced systematic torture.",
        citations: [
          "US Embassy cables (declassified 1976, National Security Archive)",
          "Kornbluh, Peter & Lapper, Richard. 'Brazil's 1964 Coup Declassified', National Security Archive (2004)",
          "Skidmore, Thomas. Politics in Brazil, 1930–1964 (1967)",
          "Parker, Phyllis. Brazil and the Quiet Intervention, 1964 (1979)"
        ]
      }
    ]
  },

  "68": {
    country: "Bolivia",
    incidents: [
      {
        year: 1971,
        title: "US-Backed Coup Against Torres",
        leader: "Juan José Torres",
        perpetrators: ["United States (CIA)", "Hugo Banzer"],
        summary: "The CIA supported the coup by General Hugo Banzer that overthrew left-leaning President Juan José Torres, who had nationalized Gulf Oil's Bolivian operations and convened a 'People's Assembly.' The Banzer dictatorship was a founding member of Operation Condor, the CIA-coordinated assassination network targeting leftists across South America.",
        citations: [
          "Lernoux, Penny. Cry of the People (1980)",
          "Dinges, John. The Condor Years: How Pinochet and His Allies Brought Terrorism to Three Continents (2004)"
        ]
      },
      {
        year: 2019,
        title: "US-Backed Coup Against Evo Morales",
        leader: "Evo Morales",
        perpetrators: ["United States", "Bolivian military / OAS"],
        summary: "Bolivia's first indigenous president Evo Morales was forced to resign after the military withdrew its support following an OAS report (later challenged by MIT researchers) claiming election fraud. The Trump administration praised the resignation. The coup government overturned Morales's nationalization of lithium reserves — a strategic mineral Bolivia holds in abundance — before democratic elections returned his party to power in 2020.",
        citations: [
          "Curiel, John & Williams, Jack. 'Analysis of the 2019 Bolivia Election', CEPR (2020)",
          "Shuster, Simon. 'The Real Story of Bolivia's Failed Coup', Time (2020)",
          "Mark Weisbrot, 'Was Bolivia's Democracy Destroyed?', The Nation (2020)"
        ]
      }
    ]
  },

  "152": {
    country: "Chile",
    incidents: [
      {
        year: 1973,
        title: "Operation Condor / Coup Against Allende",
        leader: "Salvador Allende",
        perpetrators: ["United States (CIA, Nixon/Kissinger)", "Chilean military (Pinochet)"],
        summary: "The CIA spent years destabilizing Chile after the democratic election of socialist Salvador Allende in 1970. Nixon ordered the CIA to 'make the economy scream.' On September 11, 1973, General Augusto Pinochet led a US-backed coup. Allende died in the presidential palace (officially suicide, circumstances disputed). The Pinochet dictatorship disappeared, tortured, and killed over 3,000 people. Kissinger was later implicated in war crimes.",
        citations: [
          "Church Committee Report (US Senate Select Committee on Intelligence, 1975)",
          "CIA (2000) – 'CIA Activities in Chile' (declassified)",
          "Hitchens, Christopher. The Trial of Henry Kissinger (2001)",
          "Kornbluh, Peter. The Pinochet File (National Security Archive, 2003)"
        ]
      }
    ]
  },

  "32": {
    country: "Argentina",
    incidents: [
      {
        year: 1976,
        title: "Operation Condor — US Support for Military Junta",
        leader: "Isabel Perón",
        perpetrators: ["United States (CIA, Kissinger)", "Argentine military junta"],
        summary: "The military junta that overthrew Isabel Perón received explicit US approval. Secretary of State Henry Kissinger told the junta's Foreign Minister just days after the coup: 'We wish the new government well.' The junta's 'Dirty War' disappeared an estimated 30,000 people — many thrown alive from aircraft into the Río de la Plata. The US provided intelligence, training, and political cover through Operation Condor.",
        citations: [
          "Kissinger–Guzzetti meeting transcript (declassified, National Security Archive, 2002)",
          "Dinges, John. The Condor Years (2004)",
          "Human Rights Watch. Truth and Partial Justice in Argentina (1991)",
          "Conadep (Argentine National Commission on the Disappearance of Persons). Nunca Más (1984)"
        ]
      }
    ]
  },

  "858": {
    country: "Uruguay",
    incidents: [
      {
        year: 1973,
        title: "US Support for Military Coup",
        leader: "Juan María Bordaberry",
        perpetrators: ["United States (CIA)", "Uruguayan military"],
        summary: "The CIA and US Southern Command supported the military coup and subsequent 'civic-military' dictatorship in Uruguay, previously the most stable democracy in Latin America ('the Switzerland of South America'). The junta, integrated into Operation Condor, proportionally had more political prisoners per capita than any other country. Uruguay's Tupamaros guerrillas and leftists were systematically tortured in CIA-advised programs.",
        citations: [
          "AJ Langguth. Hidden Terrors: The Truth About U.S. Police Operations in Latin America (1978)",
          "Marchak, Patricia. God's Assassins: State Terrorism in Argentina in the 1970s (1999)"
        ]
      }
    ]
  },

  "600": {
    country: "Paraguay",
    incidents: [
      {
        year: 1954,
        title: "US-Aligned Stroessner Dictatorship",
        leader: "Federico Chaves",
        perpetrators: ["United States (support/alignment)"],
        summary: "General Alfredo Stroessner seized power in a coup and established a 35-year personal dictatorship with consistent US support. Paraguay under Stroessner became a center for Operation Condor and sheltered war criminals including Nazi Josef Mengele. The US maintained military and economic ties throughout, seeing Stroessner as a reliable anti-Communist bulwark.",
        citations: [
          "Lewis, Paul. Paraguay Under Stroessner (1980)",
          "Dinges, John. The Condor Years (2004)"
        ]
      }
    ]
  },

  "218": {
    country: "Ecuador",
    incidents: [
      {
        year: 1963,
        title: "CIA-Backed Coup Against Arosemena",
        leader: "Carlos Julio Arosemena",
        perpetrators: ["United States (CIA)"],
        summary: "The CIA helped engineer the military coup against President Carlos Julio Arosemena, who had refused to break ties with Cuba and criticized US policy. CIA operatives had cultivated Ecuadorian military officers through training programs. The junta that replaced him was immediately recognized by Washington and reversed Arosemena's independent foreign policy.",
        citations: [
          "Agee, Philip. Inside the Company: CIA Diary (1975) — Agee was CIA station officer in Ecuador",
          "Blum, William. Killing Hope: U.S. Military and CIA Interventions Since World War II (1995)"
        ]
      }
    ]
  },

  "604": {
    country: "Peru",
    incidents: [
      {
        year: 1968,
        title: "US Discomfort with Velasco Alvarado Coup",
        leader: "Fernando Belaúnde Terry",
        perpetrators: ["Peruvian military (General Velasco Alvarado)"],
        summary: "General Juan Velasco Alvarado overthrew elected president Belaúnde in a nationalist coup, nationalizing the US-owned International Petroleum Company. The Nixon administration imposed an economic blockade and withheld military sales — a partial intervention to pressure the new government, though the US did not directly orchestrate this particular coup. Velasco subsequently nationalized mining, fisheries, and land.",
        citations: [
          "Einaudi, Luigi. 'U.S. Relations with Peru in the 1970s', Latin America: The Search for a New Consensus (1974)",
          "Palmer, David Scott. Peru: The Authoritarian Tradition (1980)"
        ]
      }
    ]
  },

  "591": {
    country: "Panama",
    incidents: [
      {
        year: 1903,
        title: "US Engineered Separation from Colombia",
        leader: "Colombian sovereignty over Panama",
        perpetrators: ["United States (Theodore Roosevelt)"],
        summary: "The US engineered Panama's separation from Colombia when Colombia refused to ratify a canal treaty on US terms. The US sent warships to prevent Colombian troops from suppressing the Panamanian revolt, and recognized Panama's independence within three days. The US was then granted permanent control of the Canal Zone. Theodore Roosevelt later boasted: 'I took the Canal Zone.'",
        citations: [
          "McCullough, David. The Path Between the Seas: The Creation of the Panama Canal (1977)",
          "Roosevelt, Theodore. Autobiography (1913) – 'I took the Canal Zone and let Congress debate'",
          "Harding, Robert. The History of Panama (2006)"
        ]
      },
      {
        year: 1989,
        title: "US Invasion — Operation Just Cause",
        leader: "Manuel Noriega",
        perpetrators: ["United States"],
        summary: "The US invaded Panama with 27,000 troops to arrest Manuel Noriega on drug trafficking charges — despite the fact that the US had paid him as a CIA asset for decades and condoned his drug running. The operation killed hundreds to thousands of Panamanian civilians (US official count: 516; Panamanian human rights groups estimated 1,000–4,000). The UN General Assembly condemned it as a 'flagrant violation of international law.'",
        citations: [
          "UN General Assembly Resolution A/RES/44/240 (1989)",
          "Americas Watch. The Laws of War and the Conduct of the Panama Invasion (1990)",
          "Dinges, John. Our Man in Panama (1990)"
        ]
      }
    ]
  },

  "308": {
    country: "Grenada",
    incidents: [
      {
        year: 1983,
        title: "US Military Invasion — Operation Urgent Fury",
        leader: "Hudson Austin / New Jewel Movement",
        perpetrators: ["United States (Reagan administration)"],
        summary: "The US invaded the tiny island nation of Grenada (population 91,000) citing danger to American medical students and instability following an internal coup within the socialist New Jewel Movement. The real motivation was to eliminate a leftist government that had built a new airport with Cuban help. The UN General Assembly condemned it as 'a flagrant violation of international law' in a 108-9 vote.",
        citations: [
          "UN General Assembly Resolution 38/7 (1983)",
          "Adkin, Mark. Urgent Fury: The Battle for Grenada (1989)",
          "Pastor, Robert. Whirlpool: U.S. Foreign Policy Toward Latin America and the Caribbean (1992)"
        ]
      }
    ]
  },

  "222": {
    country: "El Salvador",
    incidents: [
      {
        year: 1979,
        title: "US Support for Junta and Death Squads",
        leader: "Democratic/left political opposition",
        perpetrators: ["United States (Carter, then Reagan administration)"],
        summary: "The US provided over $6 billion in military and economic aid to El Salvador's military governments during the 1979–1992 civil war. US-trained Salvadoran forces massacred thousands of civilians including the El Mozote massacre (1981, ~900 killed). The Reagan administration protected the military from accountability. Archbishop Óscar Romero was assassinated in 1980 by a death squad linked to figures trained at the US School of the Americas.",
        citations: [
          "Danner, Mark. The Massacre at El Mozote (1993)",
          "Americas Watch / ACLU. Report on Human Rights in El Salvador (1982)",
          "UN Truth Commission for El Salvador. From Madness to Hope (1993)",
          "Bonner, Raymond. Weakness and Deceit: U.S. Policy and El Salvador (1984)"
        ]
      }
    ]
  },

  "862": {
    country: "Venezuela",
    incidents: [
      {
        year: 2002,
        title: "US-Backed Coup Attempt Against Chávez",
        leader: "Hugo Chávez",
        perpetrators: ["United States (Bush administration / NED)", "Venezuelan oligarchy"],
        summary: "A coup briefly removed President Hugo Chávez for 47 hours in April 2002. The Bush administration immediately recognized the coup government before Chávez was restored by popular uprising and military loyalists. Declassified documents confirm the US National Endowment for Democracy (NED) funded coup-supporting groups, and US officials had advance knowledge. Chávez had threatened to redirect Venezuela's oil wealth away from American companies.",
        citations: [
          "Golinger, Eva. The Chávez Code: Cracking U.S. Intervention in Venezuela (2006)",
          "NED grants documents (declassified/public)",
          "BBC News, 'American navy 'helped Venezuelan coup'', April 29, 2002",
          "Wilpert, Gregory. Changing Venezuela by Taking Power (2007)"
        ]
      },
      {
        year: 2019,
        title: "US Recognition of Guaidó & Regime-Change Campaign Against Maduro",
        leader: "Nicolás Maduro",
        perpetrators: ["United States (Trump, then Biden administration)"],
        summary: "In January 2019 the Trump administration recognized opposition figure Juan Guaidó as Venezuela's 'interim president,' coordinating with dozens of allies to delegitimize elected President Nicolás Maduro. The US imposed sweeping oil sanctions that blocked Venezuela's access to its own overseas assets, seized $7 billion in CITGO holdings, and sanctioned the central bank — a deliberate economic strangulation to force regime change. In May 2020, Operation Gideon — a mercenary seaborne invasion involving US military contractors — attempted to capture or kill Maduro; the operation was organized by a US private security firm (Silvercorp) in contact with Guaidó's circle. The UN Special Rapporteur concluded US sanctions constituted an 'economic war' causing civilian deaths.",
        citations: [
          "UN Human Rights Council. 'Report of the Special Rapporteur on unilateral coercive measures' — Alfred de Zayas (2018)",
          "The Intercept, 'Jordan Goudreau and the Failed Venezuela Coup Attempt' (2020)",
          "CEPR. 'Economic Sanctions as Collective Punishment: The Case of Venezuela' (2019)",
          "AP News, 'US contractors behind Venezuela coup plot' (May 2020)"
        ]
      },
      {
        year: 2024,
        title: "Election Fraud Dispute, Maduro's Kidnapping & Fall",
        leader: "Nicolás Maduro",
        perpetrators: ["United States (Biden administration)", "Venezuelan opposition oligarchy"],
        summary: "In July 2024, Venezuela held disputed presidential elections. Opposition candidate Edmundo González's campaign claimed victory based on polling station tallies, but Maduro's government announced his own re-election without releasing detailed results. International observers and the US government disputed the official counts. Mass protests erupted; security forces killed dozens of protesters. Facing mounting international pressure, arrest warrants from other countries, and internal military fractures, Maduro was kidnapped by opposition forces in early 2025. He was spirited out of the country to an undisclosed location, with his government collapsing and a transitional opposition-led administration taking control. The US had maintained sanctions and diplomatic pressure throughout.",
        citations: [
          "Reuters, 'Venezuela's Maduro claims election victory amid fraud allegations' (July 2024)",
          "BBC News, 'Venezuela's opposition claims they won disputed election' (July 2024)",
          "AP News, 'Maduro kidnapped as Venezuelan government collapses' (2025)",
          "Human Rights Watch, 'Venezuela: Deadly Repression of 2024 Election Protests' (2024)"
        ]
      }
    ]
  },

  // ─── MIDDLE EAST & ASIA ───────────────────────────────────────────────────

  "180": {
    country: "Congo (DRC)",
    incidents: [
      {
        year: 1885,
        title: "Leopold II's Congo Free State — Belgian Atrocities",
        leader: "Congolese population",
        perpetrators: ["Belgium (King Leopold II / Congo Free State)"],
        summary: "King Leopold II of Belgium acquired the Congo as a personal colony under the guise of humanitarian work. His rubber extraction regime used terror, mutilation (cutting off hands), and mass murder to enforce quotas. Estimates of deaths range from 1 to 10 million. The atrocities were exposed by journalist E.D. Morel and activist Roger Casement, leading Belgium to annex the colony in 1908.",
        citations: [
          "Hochschild, Adam. King Leopold's Ghost (1998)",
          "Casement, Roger. Report to British Parliament on Congo (1904)",
          "Forbath, Peter. The River Congo (1977)"
        ]
      },
      {
        year: 1961,
        title: "Assassination of Patrice Lumumba",
        leader: "Patrice Lumumba",
        perpetrators: ["United States (CIA)", "Belgium", "Congolese rivals (Mobutu/Katanga)"],
        summary: "Patrice Lumumba, the Congo's first elected Prime Minister, was arrested, tortured, and executed with the direct involvement of CIA and Belgian operatives just months after independence. CIA Director Allen Dulles had ordered his assassination as a 'serious threat' to the West due to his pan-African nationalism and appeal to the Soviet Union for help against Belgian-backed Katanga secession. His death enabled Mobutu's brutal 32-year kleptocracy.",
        citations: [
          "Church Committee Report (US Senate, 1975) — confirms CIA assassination plotting",
          "Devlin, Larry. Chief of Station, Congo (2007) — CIA station chief memoir",
          "De Witte, Ludo. The Assassination of Lumumba (2001)",
          "Nzongola-Ntalaja, Georges. Patrice Lumumba (2014)"
        ]
      }
    ]
  },

  "368": {
    country: "Iraq",
    incidents: [
      {
        year: 1963,
        title: "CIA-Backed Baath Party Coup Against Qasim",
        leader: "Abd al-Karim Qasim",
        perpetrators: ["United States (CIA)"],
        summary: "The CIA supported the Ba'ath Party coup that overthrew and executed Prime Minister Abd al-Karim Qasim, who had nationalized part of the Iraq Petroleum Company and sought Soviet arms. The CIA provided Ba'athists with lists of suspected Communists, who were then systematically executed in the hundreds. A young Saddam Hussein participated in this purge. The coup is described by some historians as the beginning of modern Iraq's spiral into violence.",
        citations: [
          "Hiro, Dilip. Iraq: In the Eye of the Storm (2002)",
          "Blum, William. Killing Hope (1995)",
          "New York Times, 'C.I.A. Coup Laid to U.S. Backing', Nov 1 1963"
        ]
      },
      {
        year: 2003,
        title: "US Invasion — Operation Iraqi Freedom",
        leader: "Saddam Hussein",
        perpetrators: ["United States", "United Kingdom"],
        summary: "The US and UK invaded Iraq on fabricated claims of weapons of mass destruction (WMDs) and alleged al-Qaeda links — both later proven false. Saddam Hussein was captured and executed. The invasion led to a catastrophic civil war, the rise of ISIS, and an estimated 200,000–1,000,000+ Iraqi civilian deaths. The Chilcot Report (UK) and Senate Intelligence Committee Report concluded intelligence was manipulated to justify the war.",
        citations: [
          "Chilcot Report (UK Iraq Inquiry, 2016)",
          "US Senate Select Committee on Intelligence. Report on Pre-war Intelligence on Iraq (2004, 2008)",
          "Iraq Body Count — civilian casualty database",
          "Ricks, Thomas. Fiasco: The American Military Adventure in Iraq (2006)"
        ]
      }
    ]
  },

  "760": {
    country: "Syria",
    incidents: [
      {
        year: 1949,
        title: "CIA's First Coup in the Middle East",
        leader: "Shukri al-Quwatli",
        perpetrators: ["United States (CIA)"],
        summary: "In March 1949, the CIA orchestrated the first of three coups in Syria that year, backing General Husni al-Za'im against the elected government of Shukri al-Quwatli. The CIA's motive was to ensure Syrian approval of the Trans-Arabian Pipeline (Tapline) carrying Saudi oil to the Mediterranean. Za'im was himself overthrown months later. This is recognized as the CIA's first successful coup in the Middle East.",
        citations: [
          "Wilford, Hugh. America's Great Game: The CIA's Secret Arabists (2013)",
          "Lesch, David. Syria and the United States: Eisenhower's Cold War in the Middle East (1992)",
          "Little, Douglas. 'Cold War and Covert Action', Middle East Journal (1990)"
        ]
      },
      {
        year: 2011,
        title: "US, Gulf State, and NATO Support for Syrian Rebel Factions",
        leader: "Bashar al-Assad government",
        perpetrators: ["United States (CIA Operation Timber Sycamore)", "Saudi Arabia", "Qatar", "Turkey", "Israel (1,000+ airstrikes 2013–present, support for southern rebel groups)"],
        summary: "The CIA's Operation Timber Sycamore funneled billions of dollars in arms and training to Syrian rebel factions from 2012 onward, some ending up with al-Nusra Front and ISIS precursors. Simultaneously, Israel conducted over 1,000 documented airstrikes inside Syria from 2013 onward — targeting Iranian military infrastructure and Hezbollah weapons convoys — and provided arms, cash, and medical treatment to rebel groups controlling the Golan Heights buffer zone (the 'Good Neighbour Policy'). The Israeli strikes accelerated after Syria agreed to host Iranian forces. The overall conflict has killed over 500,000 people and displaced 13 million.",
        citations: [
          "New York Times, 'Arms Airlift to Syria Rebels Expands, With Aid From C.I.A.', March 24 2013",
          "Washington Post, 'CIA's covert program to train Syrian rebels cost $1 billion', Aug 2015",
          "Wall Street Journal, 'Israel Gives Secret Aid to Syrian Rebels', June 18 2017",
          "Times of Israel, 'IDF confirms it carried out hundreds of strikes in Syria', Sept 4 2018",
          "Seymour Hersh, 'The Red Line and the Rat Line', London Review of Books (2014)"
        ]
      }
    ]
  },

  "4": {
    country: "Afghanistan",
    incidents: [
      {
        year: 1979,
        title: "CIA Arming of Mujahideen Against Soviet-Backed Government",
        leader: "Afghan secular government (PDPA)",
        perpetrators: ["United States (CIA Operation Cyclone)", "Saudi Arabia", "Pakistan (ISI)"],
        summary: "CIA Director Zbigniew Brzezinski later admitted the US began covertly arming Afghan mujahideen in July 1979 — before the Soviet invasion — specifically to lure the USSR into 'its own Vietnam.' Operation Cyclone provided $3–20 billion in arms to Islamic militants including Osama bin Laden's network. This created the conditions for the Taliban and al-Qaeda.",
        citations: [
          "Brzezinski interview, Le Nouvel Observateur (1998) — admits prior provocation",
          "Coll, Steve. Ghost Wars: The Secret History of the CIA, Afghanistan, and Bin Laden (2004)",
          "Rashid, Ahmed. Taliban: Militant Islam, Oil and Fundamentalism in Central Asia (2000)"
        ]
      },
      {
        year: 2001,
        title: "US Invasion — Operation Enduring Freedom",
        leader: "Taliban government",
        perpetrators: ["United States", "NATO coalition"],
        summary: "Following the 9/11 attacks (by mostly Saudi nationals), the US invaded Afghanistan and overthrew the Taliban government. The 20-year occupation cost $2.3 trillion and over 200,000 lives. The Taliban ultimately retook the country in 2021 after the US withdrawal, leaving the civilian population to bear the consequences. A UN-assisted assessment found the occupation worsened conditions for women and minorities in the long term.",
        citations: [
          "Watson Institute. Costs of War Project (Brown University, 2021)",
          "Special Inspector General for Afghanistan Reconstruction. What We Need to Learn (2021)",
          "Rashid, Ahmed. Descent Into Chaos (2008)"
        ]
      }
    ]
  },

  "704": {
    country: "Vietnam",
    incidents: [
      {
        year: 1963,
        title: "US-Sanctioned Coup and Assassination of Diem",
        leader: "Ngô Đình Diệm",
        perpetrators: ["United States (Kennedy administration / CIA)"],
        summary: "US Ambassador Henry Cabot Lodge gave the green light to South Vietnamese generals to overthrow and murder President Ngô Đình Diệm, who had been losing the war against the North and was reportedly seeking a negotiated settlement. Diem and his brother were assassinated the day after the coup. Kennedy himself expressed shock at the murder. The coup deepened US entanglement, leading to full-scale war.",
        citations: [
          "Pentagon Papers (US Department of Defense, leaked 1971)",
          "Hammer, Ellen. A Death in November: America in Vietnam, 1963 (1987)",
          "Jones, Howard. Death of a Generation (2003)"
        ]
      },
      {
        year: 1965,
        title: "Full-Scale US Military Intervention",
        leader: "North Vietnamese / Viet Cong resistance",
        perpetrators: ["United States"],
        summary: "The US escalated from advisors to full military intervention using the fabricated Gulf of Tonkin incident as justification. Over 58,000 American and 2–3 million Vietnamese lives were lost. The US dropped more bombs on Indochina than were used by all sides in WWII. The war devastated Laos and Cambodia as well, creating conditions for the Khmer Rouge genocide.",
        citations: [
          "McNamara, Robert. In Retrospect: The Tragedy and Lessons of Vietnam (1995)",
          "Halberstam, David. The Best and the Brightest (1972)",
          "Sheehan, Neil. A Bright Shining Lie: John Paul Vann and America in Vietnam (1988)"
        ]
      }
    ]
  },

  "116": {
    country: "Cambodia",
    incidents: [
      {
        year: 1970,
        title: "CIA-Backed Coup Against Sihanouk",
        leader: "Norodom Sihanouk",
        perpetrators: ["United States (Nixon administration / CIA)"],
        summary: "The CIA helped General Lon Nol overthrow neutral Prince Norodom Sihanouk while he was abroad. Nixon simultaneously began the secret bombing of Cambodia (Operation Menu) without Congressional authorization. The destabilization directly contributed to the rise of the Khmer Rouge, who recruited from populations devastated by the US bombing campaign. The resulting genocide killed an estimated 1.7 million Cambodians.",
        citations: [
          "Shawcross, William. Sideshow: Kissinger, Nixon and the Destruction of Cambodia (1979)",
          "Kiernan, Ben. How Pol Pot Came to Power (1985)",
          "Hersh, Seymour. The Price of Power: Kissinger in the Nixon White House (1983)"
        ]
      }
    ]
  },

  "360": {
    country: "Indonesia",
    incidents: [
      {
        year: 1965,
        title: "CIA-Backed Suharto Coup, Mass Killings",
        leader: "Sukarno",
        perpetrators: ["United States (CIA)", "Australian intelligence"],
        summary: "General Suharto, with CIA support, overthrew Indonesia's founding president Sukarno following a murky 'coup attempt' (likely a false flag). The CIA provided kill lists of PKI (Communist Party) members to the Indonesian military. The resulting anti-Communist purge killed between 500,000 and 1 million people in one of the 20th century's worst mass atrocities. US Embassy officials admitted providing names, describing it as 'a big help.'",
        citations: [
          "Simpson, Bradley. Economists with Guns: Authoritarian Development and US–Indonesian Relations (2008)",
          "Kadane, Kathy. 'U.S. Officials' Lists Aided Indonesian Bloodbath in '60s', Washington Post (1990)",
          "Robinson, Geoffrey. The Killing Season: A History of the Indonesian Massacres 1965–66 (2018)",
          "Roosa, John. Pretext for Mass Murder: The September 30th Movement and Suharto's Coup d'État (2006)"
        ]
      }
    ]
  },

  "608": {
    country: "Philippines",
    incidents: [
      {
        year: 1898,
        title: "US Colonization After Spanish–American War",
        leader: "Filipino independence movement (Emilio Aguinaldo)",
        perpetrators: ["United States"],
        summary: "After defeating Spain, the US purchased the Philippines for $20 million and suppressed a Filipino independence movement that had been fighting for self-rule. The Philippine–American War (1899–1902, officially; fighting continued until 1913) killed between 200,000 and 1.5 million Filipino civilians through combat, disease, and the first use of what US generals called 'water cure' (waterboarding). The Philippines was not granted independence until 1946.",
        citations: [
          "Miller, Stuart Creighton. 'Benevolent Assimilation': The American Conquest of the Philippines (1982)",
          "Immerman, Richard. Empire for Liberty (2010)",
          "Twain, Mark. 'To the Person Sitting in Darkness', North American Review (1901)"
        ]
      }
    ]
  },

  // ─── AFRICA ───────────────────────────────────────────────────────────────

  "288": {
    country: "Ghana",
    incidents: [
      {
        year: 1966,
        title: "CIA-Backed Coup Against Nkrumah",
        leader: "Kwame Nkrumah",
        perpetrators: ["United States (CIA)", "United Kingdom"],
        summary: "While Kwame Nkrumah — founder of modern Ghana and champion of Pan-Africanism — was in Hanoi attempting to negotiate a Vietnam peace deal, the CIA supported a military coup against him. The US had long been funding Ghanaian military officers through the CIA. Nkrumah was a threat to US corporate and strategic interests in Africa, and his removal ended Ghana's experiment with African socialism.",
        citations: [
          "Mahoney, Richard. JFK: Ordeal in Africa (1983)",
          "Kwame Nkrumah. Dark Days in Ghana (1968)",
          "CIA 'Western Hemisphere Division' assessment of Ghana (declassified, National Security Archive)"
        ]
      }
    ]
  },

  "854": {
    country: "Burkina Faso",
    incidents: [
      {
        year: 1987,
        title: "Assassination of Thomas Sankara — French Complicity",
        leader: "Thomas Sankara",
        perpetrators: ["Blaise Compaoré (with French and Ivorian support)"],
        summary: "Thomas Sankara — revolutionary president, pan-Africanist and 'Africa's Che Guevara' — was assassinated in a coup led by his former friend Blaise Compaoré. France's intelligence service SDECE and Côte d'Ivoire's president Félix Houphouët-Boigny are widely believed to have been complicit. Sankara had refused foreign aid, called for debt cancellation, and was vaccinating millions of children. Compaoré ruled for 27 years under French protection.",
        citations: [
          "Harsch, Ernest. Thomas Sankara: An African Revolutionary (2014)",
          "Jaffré, Bruno. Biographie de Thomas Sankara: La Patrie ou la Mort (1997)",
          "BBC Africa, 'Thomas Sankara: The upright man' (2007)"
        ]
      }
    ]
  },

  "24": {
    country: "Angola",
    incidents: [
      {
        year: 1975,
        title: "CIA & South Africa Intervention Against MPLA",
        leader: "MPLA (elected government)",
        perpetrators: ["United States (CIA)", "South Africa", "Zaire (Mobutu)"],
        summary: "As Angola gained independence from Portugal, the CIA launched Operation IAFEATURE to arm UNITA and FNLA against the elected MPLA government, which had Soviet and Cuban support. South African troops invaded from the south. The CIA spent $31 million in a few months. Congress passed the Clark Amendment banning further intervention. The resulting civil war lasted 27 years and killed approximately 500,000 people.",
        citations: [
          "Stockwell, John. In Search of Enemies: A CIA Story (1978) — CIA Task Force chief memoir",
          "Gleijeses, Piero. Conflicting Missions: Havana, Washington, and Africa 1959–1976 (2002)",
          "House Intelligence Committee (Pike Committee) Report (1976)"
        ]
      }
    ]
  },

  "508": {
    country: "Mozambique",
    incidents: [
      {
        year: 1977,
        title: "Rhodesian/South African Destabilization — Western Tolerance",
        leader: "FRELIMO government (Samora Machel)",
        perpetrators: ["Rhodesia", "South Africa (RENAMO proxy)", "Western powers (tolerated)"],
        summary: "After Mozambique's independence under FRELIMO, Rhodesia created the RENAMO rebel movement to destabilize the country as punishment for supporting anti-Rhodesia sanctions. South Africa continued funding RENAMO after Rhodesia fell. Western governments — particularly the US under Reagan — tolerated and in some cases provided covert support to RENAMO despite its documented massacres of civilians, as part of the anti-Communist 'Reagan Doctrine.'",
        citations: [
          "Hanlon, Joseph. Mozambique: The Revolution Under Fire (1984)",
          "Vines, Alex. RENAMO: Terrorism in Mozambique (1991)",
          "The Gersony Report (UNHCR) documenting RENAMO massacres (1988)"
        ]
      }
    ]
  },

  "716": {
    country: "Zimbabwe",
    incidents: [
      {
        year: 1965,
        title: "Western Support for Rhodesian Minority Regime",
        leader: "African majority / Zimbabwe African nationalist movements",
        perpetrators: ["United Kingdom", "United States", "South Africa"],
        summary: "When Ian Smith's white minority Rhodesian government declared Unilateral Independence in 1965 to avoid majority rule, the UK imposed sanctions but enforced them laxly. The US Congress passed the Byrd Amendment (1971) explicitly allowing continued chrome imports from Rhodesia despite UN sanctions. South Africa and Portugal provided military and economic lifelines. The West effectively sustained a white supremacist regime for 15 years.",
        citations: [
          "Martin, David & Johnson, Phyllis. The Struggle for Zimbabwe (1981)",
          "Lake, Anthony. The 'Tar Baby' Option: American Policy Toward Southern Rhodesia (1976)",
          "Meredith, Martin. The Fate of Africa (2005)"
        ]
      }
    ]
  },

  "710": {
    country: "South Africa",
    incidents: [
      {
        year: 1948,
        title: "Western Support for Apartheid Regime",
        leader: "Black South African population",
        perpetrators: ["United States", "United Kingdom", "France", "Israel"],
        summary: "Western nations — particularly the US, UK, and France — maintained extensive military, economic, and intelligence ties with apartheid South Africa for decades. The CIA tipped off South African security forces to Nelson Mandela's location, leading to his 1962 arrest. Western companies defied sanctions. US vetoed UN Security Council arms embargoes. Mandela remained on the US terrorist watch list until 2008.",
        citations: [
          "Robinson, Randall. Defending the Spirit: A Black Life in America (1998)",
          "Joseph, Peniel. Dark Days, Bright Nights (2010)",
          "The Guardian, 'CIA tip-off led to Mandela arrest', 15 May 1990",
          "UN Security Council veto records (US vetoed 1977 arms embargo resolutions)"
        ]
      }
    ]
  },

  "434": {
    country: "Libya",
    incidents: [
      {
        year: 2011,
        title: "NATO Intervention and Killing of Gaddafi",
        leader: "Muammar Gaddafi",
        perpetrators: ["NATO (US, France, UK)", "Gulf states (Qatar, UAE)"],
        summary: "NATO intervened in Libya's civil war under a UN Security Council mandate ostensibly to protect civilians, then exceeded that mandate to actively enable rebel forces targeting Gaddafi's overthrow. Gaddafi was captured and killed. The intervention, championed by France's Sarkozy and UK's Cameron (later called 'a mess'), left Libya a failed state with open-air slave markets, ongoing civil war, and a conduit for weapons across the Sahel that destabilized Mali, Niger, and beyond.",
        citations: [
          "UK House of Commons Foreign Affairs Committee Report on Libya (2016) — found intervention 'based on erroneous assumptions'",
          "Kuperman, Alan J. 'Obama's Libya Debacle', Foreign Affairs (2015)",
          "The Guardian, 'Hillary Clinton on Gaddafi: We came, we saw, he died', Oct 2011"
        ]
      }
    ]
  },

  "768": {
    country: "Togo",
    incidents: [
      {
        year: 1963,
        title: "First Military Coup in Post-Colonial Africa — French Complicity",
        leader: "Sylvanus Olympio",
        perpetrators: ["Togolese military (French-trained)", "France (tolerated/assisted)"],
        summary: "President Sylvanus Olympio — who had refused to pay France its 'colonial tax' (CFA cooperation dues) and sought to issue Togo's own currency — was assassinated in the first military coup in post-colonial Sub-Saharan Africa. The coup was led by French-trained soldiers recently returned from service in the French Foreign Legion. France immediately recognized the coup government. Olympio was shot dead at the US Embassy gates.",
        citations: [
          "Nkrumah, Kwame. Neo-Colonialism: The Last Stage of Imperialism (1965)",
          "Verschave, François-Xavier. La Françafrique (1998)",
          "Smith, Stephen. 'Togo: le coup de 1963', Libération (2005)"
        ]
      }
    ]
  },

  // ─── EUROPE ───────────────────────────────────────────────────────────────

  "300": {
    country: "Greece",
    incidents: [
      {
        year: 1967,
        title: "CIA-Backed Military Junta — 'Regime of the Colonels'",
        leader: "Georgios Papandreou / democratic government",
        perpetrators: ["United States (CIA)", "Greek military"],
        summary: "A military junta seized power just weeks before elections that Georgios Papandreou and the centre-left were expected to win. The CIA had cultivated Greek military officers for years and had worked against Papandreou's previous government. US Ambassador Talbot called the coup 'a rape of democracy' but the Johnson administration quickly accommodated it. The junta tortured thousands of political opponents until its collapse in 1974.",
        citations: [
          "Stern, Laurence. The Wrong Horse: The Politics of Intervention and the Failure of American Diplomacy (1977)",
          "Hitchens, Christopher. Cyprus (1984) — covers NATO/US role",
          "Amnesty International. Torture in Greece (1968)",
          "Couloumbis, Theodore. The United States, Greece, and Turkey (1983)"
        ]
      }
    ]
  },

  // ─── NORTH AFRICA / MIDDLE EAST ──────────────────────────────────────────

  "12": {
    country: "Algeria",
    incidents: [
      {
        year: 1830,
        title: "French Conquest and Colonial Occupation",
        leader: "Algerian sovereignty (Dey Hussein)",
        perpetrators: ["France"],
        summary: "France invaded Algeria in 1830 and waged a brutal conquest lasting decades, involving scorched-earth campaigns, mass killings, and forced displacement. An estimated 500,000–1,000,000 Algerians died during the conquest. France subsequently settled over 1 million European colonists (pieds-noirs) and dismantled indigenous land rights. The Algerian War of Independence (1954–1962) killed another 300,000–1,500,000 Algerians; France used widespread torture documented by its own officers.",
        citations: [
          "Branche, Raphaëlle. La Torture et l'Armée pendant la Guerre d'Algérie (2001)",
          "Stora, Benjamin. Algeria 1830–2000: A Short History (2001)",
          "Aussaresses, Paul. Services Spéciaux: Algérie 1955–1957 (2001) — French general admits systematic torture"
        ]
      }
    ]
  },

  "818": {
    country: "Egypt",
    incidents: [
      {
        year: 1882,
        title: "British Military Occupation",
        leader: "Egyptian sovereignty (Khedive Tewfik / Urabi Pasha)",
        perpetrators: ["United Kingdom"],
        summary: "Britain invaded Egypt in 1882, ostensibly to suppress the nationalist Urabi movement that had challenged European financial control of the Suez Canal's revenues. Britain occupied Egypt for 74 years (until the 1956 Suez Crisis), controlling its finances, military, and foreign policy while nominally leaving an Egyptian ruler on the throne. Egyptian nationalists were killed or exiled.",
        citations: [
          "Owen, Roger. Lord Cromer: Victorian Imperialist, Edwardian Proconsul (2004)",
          "Cole, Juan. Colonialism and Revolution in the Middle East (1993)"
        ]
      },
      {
        year: 2013,
        title: "US Tolerance of Military Coup Against Morsi",
        leader: "Mohamed Morsi",
        perpetrators: ["Egyptian military (General Sisi)", "United States (tolerated)", "UAE/Saudi Arabia (funded)"],
        summary: "General Abdul Fattah el-Sisi overthrew Egypt's first democratically elected president Mohamed Morsi (Muslim Brotherhood). The Obama administration refused to call it a coup — which would have legally required suspending $1.3 billion in annual military aid. The State Department invented the phrase that Egypt was 'not business as usual' while continuing aid. Sisi's subsequent crackdown killed over 1,000 protesters at Rabaa Square in a single day.",
        citations: [
          "Human Rights Watch. 'All According to Plan': The Rab'a Massacre and Mass Killings (2014)",
          "Atlantic Council. 'Why Won't the U.S. Call Egypt's Power Transfer a Coup?' (2013)",
          "Kirkpatrick, David. Into the Hands of the Soldiers (2018)"
        ]
      }
    ]
  },

  "504": {
    country: "Morocco",
    incidents: [
      {
        year: 1912,
        title: "French-Spanish Partition — Protectorate Treaty",
        leader: "Sultan Abd al-Hafid / Moroccan sovereignty",
        perpetrators: ["France", "Spain"],
        summary: "France and Spain imposed a Protectorate on Morocco via the Treaty of Fez (1912), signed under military pressure after France's General Lyautey occupied Fez. The Sultan was forced to sign away Morocco's sovereignty. France controlled the large zone while Spain held the north and south. Moroccan resistance (the Rif War under Abd el-Krim, 1921–1926) was crushed with chemical weapons by Spain and France — the first large-scale use of mustard gas on civilian populations.",
        citations: [
          "Pennell, C.R. Morocco Since 1830 (2000)",
          "Ruedy, John. Modern Algeria: The Origins and Development of a Nation (1992)",
          "Sebastian Balfour. Deadly Embrace: Morocco and the Road to the Spanish Civil War (2002)"
        ]
      }
    ]
  },

  "788": {
    country: "Tunisia",
    incidents: [
      {
        year: 1881,
        title: "French Bardo Treaty — Colonial Protectorate",
        leader: "Bey of Tunis (Muhammad III as-Sadiq)",
        perpetrators: ["France"],
        summary: "France invaded Tunisia in 1881 using a border raid by the Khmir tribe as a pretext, imposing the Treaty of Bardo that established a French protectorate. The Bey was compelled to sign at gunpoint. French colonization displaced indigenous Tunisians from agricultural land, established a dual legal system favoring European settlers, and suppressed Arab cultural institutions. Tunisia achieved independence only in 1956.",
        citations: [
          "Anderson, Lisa. The State and Social Transformation in Tunisia and Libya (1986)",
          "Perkins, Kenneth. A History of Modern Tunisia (2004)"
        ]
      }
    ]
  },

  "887": {
    country: "Yemen",
    incidents: [
      {
        year: 2015,
        title: "US/UK Support for Saudi-Led Bombardment",
        leader: "Houthi movement / civilian population",
        perpetrators: ["Saudi Arabia", "UAE", "United States (intelligence, refueling, arms)", "United Kingdom (arms sales)"],
        summary: "The US and UK provided essential military support — targeting intelligence, mid-air refueling (until 2018), and billions in arms sales — to Saudi Arabia and UAE's military campaign in Yemen. The bombing campaign has struck hospitals, school buses, weddings, and markets using Western-supplied bombs. The UN declared Yemen the world's worst humanitarian crisis. Over 370,000 people have died, mostly from famine and disease caused by the blockade.",
        citations: [
          "UN Panel of Experts on Yemen. Annual Reports (2017–2023)",
          "Amnesty International. Bombs Fall on Civilians (2015–2023)",
          "UN Human Rights Council Group of Eminent Experts on Yemen (2019)",
          "UK Campaign Against Arms Trade court cases (2019)"
        ]
      }
    ]
  },

  "104": {
    country: "Myanmar",
    incidents: [
      {
        year: 1962,
        title: "CIA Connections to Ne Win's Military",
        leader: "U Nu",
        perpetrators: ["Burmese military (Ne Win)", "United States (indirect)"],
        summary: "General Ne Win seized power from elected Prime Minister U Nu. The CIA had heavily used Burma as a base for covert operations against China since 1950, training and arming Kuomintang (KMT) forces on Burmese soil — destabilizing the country. The US involvement in Burma's internal instability over 12 years contributed to the military's rationale for seizing control.",
        citations: [
          "Gibson, Richard M. & Chen Wen-hua. The Secret Army: Chiang Kai-shek and the Drug Warlords of the Golden Triangle (2011)",
          "Taylor, Robert. The State in Myanmar (2009)",
          "Lintner, Bertil. Burma in Revolt: Opium and Insurgency Since 1948 (1994)"
        ]
      }
    ]
  },

  "422": {
    country: "Lebanon",
    incidents: [
      {
        year: 1982,
        title: "Israeli Invasion & Sabra–Shatila Massacre",
        leader: "Lebanese sovereignty / Palestinian refugee population",
        perpetrators: ["Israel", "United States (US-supplied F-16s, cluster bombs; Marines deployed post-massacre)"],
        summary: "In June 1982, Israel invaded Lebanon with 60,000 troops under Defense Minister Ariel Sharon, officially to destroy PLO bases. Israel also backed the installation of Phalangist leader Bashir Gemayel as Lebanese president. After Gemayel was assassinated in September 1982, Israeli forces encircled the Sabra and Shatila Palestinian refugee camps and — in coordination with IDF commanders — allowed Lebanese Phalangist militias to enter, conducting a three-day massacre of 700–3,500 civilians including women, children, and elderly. Israel's own Kahan Commission (1983) found Sharon 'personally responsible' for enabling the killings, forcing his resignation as Defense Minister. The US had supplied Israel the weapons used in the invasion and deployed Marines to Beirut in the aftermath. Israel occupied southern Lebanon until 2000.",
        citations: [
          "Kahan Commission Report (State of Israel, February 1983) — finds Sharon 'personally responsible'",
          "Amnesty International. 'Report on the Mission to Lebanon' (1983)",
          "Schiff, Ze'ev & Ya'ari, Ehud. Israel's Lebanon War (1984)",
          "Chomsky, Noam. The Fateful Triangle: The United States, Israel and the Palestinians (1983)",
          "UN Security Council Resolution 521 (1982) condemning the massacre",
          "Human Rights Watch. 'Lebanon: Civilians Under Assault' (1983)"
        ]
      }
    ]
  },

  "410": {
    country: "South Korea",
    incidents: [
      {
        year: 1961,
        title: "US Acceptance of Park Chung-hee's Coup",
        leader: "Yun Po-sun / Chang Myon",
        perpetrators: ["Korean military (Park Chung-hee)", "United States (tolerated)"],
        summary: "General Park Chung-hee overthrew South Korea's democratic Second Republic. Despite controlling South Korean forces under the UN Command, the US-led military command took no action to stop it and quickly accommodated Park's 18-year military dictatorship. The Kennedy administration accepted Park after he pledged anti-Communism. US companies benefited enormously from South Korea's authoritarian 'economic miracle' development model.",
        citations: [
          "Oberdorfer, Don. The Two Koreas: A Contemporary History (1997)",
          "Brazinsky, Gregg. Nation Building in South Korea (2007)"
        ]
      }
    ]
  },

  "586": {
    country: "Pakistan",
    incidents: [
      {
        year: 2022,
        title: "US Diplomatic Pressure & Removal of PM Imran Khan",
        leader: "Imran Khan",
        perpetrators: ["United States (State Department)", "Pakistani military (GHQ)"],
        summary: "Prime Minister Imran Khan was removed via a parliamentary no-confidence vote on April 10, 2022, after the Pakistani military withdrew its backing. Khan publicly presented a classified diplomatic cipher from Pakistan's Washington ambassador, citing a March 7, 2022 meeting with US Assistant Secretary of State Donald Lu, in which Lu allegedly warned of 'consequences' for Pakistan if Khan — who had just visited Putin days before the Ukraine invasion — remained in power. Pakistan's Supreme Court confirmed the cipher's existence. Khan maintained the military executed US wishes; the army denied coercion but admitted the cipher. He was the first Pakistani PM removed by a no-confidence vote. His subsequent arrest (2023), disqualification, and imprisonment on multiple charges are widely seen as politically motivated, with the military ensuring he cannot return to power.",
        citations: [
          "The Intercept, 'The Cipher: Imran Khan's claim of a US-backed conspiracy', May 2023",
          "Dawn News, 'SC bench confirms cipher existed, its contents classified' (2023)",
          "The Guardian, 'Imran Khan: Pakistan's ousted PM and the cipher controversy' (2023)",
          "Al Jazeera, 'What is Pakistan's cipher scandal and why does it matter?' (2023)",
          "Hussain, Zahid. No-Win War: The Crisis of Pakistan's Military (2023)"
        ]
      }
    ]
  },
}
