export interface GameCategory {
  id: string;
  name: string;
  icon: string;
  badge: string;
  description: string;
}

export const GAME_CATEGORIES: GameCategory[] = [
  { id: 'gamer', name: 'Gamer', icon: '🎮', badge: 'Gamer', description: 'Nicks intensos y directos para partidas competitivas' },
  { id: 'chidos', name: 'Chidos', icon: '🔥', badge: 'Chidos', description: 'Nombres con personalidad que destacan en el lobby' },
  { id: 'aesthetic', name: 'Aesthetic', icon: '✨', badge: 'Aesthetic', description: 'Estilos limpios, armoniosos y visualmente suaves' },
  { id: 'elegantes', name: 'Elegantes', icon: '👑', badge: 'Elegante', description: 'Nombres distinguidos con un toque regio y sofisticado' },
  { id: 'cortos', name: 'Cortos', icon: '⚡', badge: 'Corto', description: 'Palabras de 3 a 5 letras fáciles de recordar' },
  { id: 'divertidos', name: 'Divertidos', icon: '😄', badge: 'Divertido', description: 'Nombres ingeniosos y cómicos para jugar con amigos' },
  { id: 'oscuros', name: 'Oscuros', icon: '🌙', badge: 'Oscuro', description: 'Nicks misteriosos, sombríos y góticos' },
  { id: 'competitivos', name: 'Competitivos', icon: '🏆', badge: 'Ranked', description: 'Ideal para torneos, tablas de clasificación y PvP' },
  { id: 'minimalistas', name: 'Minimalistas', icon: '🧊', badge: 'Minimal', description: 'Combinaciones directas, limpias y sin sobrecarga' },
  { id: 'clan', name: 'Clan', icon: '👥', badge: 'Clan', description: 'Identidades y tags diseñadas para escuadras y gremios' }
];

export const QUICK_BASE_WORDS = [
  'Shadow',
  'Nova',
  'Luna',
  'Rayo',
  'Nexo',
  'Astro',
  'Zen',
  'Fénix',
  'Vortex',
  'Kael'
];

export const RANDOM_GAMER_NAMES = [
  'Shadow', 'Nova', 'Titan', 'Vortex', 'Kael', 'Ryu', 'Zyn', 'Ares', 'Nyx', 'Raze',
  'Fénix', 'Aura', 'Pixel', 'Trueno', 'Sombra', 'Lobo', 'Kiro', 'Vanta', 'Eclipse', 'Ziro',
  'Ghost', 'Frost', 'Blaze', 'Reaper', 'Zenith', 'Crono', 'Specter', 'Draco', 'Hydra', 'Blitz',
  'AimGod', 'Alpha', 'Omega', 'Valkyrie', 'Falcon', 'Raven', 'Venom', 'Storm', 'Cipher', 'Viper'
];

export interface SymbolWrapper {
  id: string;
  prefix: string;
  suffix: string;
  styleName: string;
  categories: string[];
}

export const GAME_SYMBOL_WRAPPERS: SymbolWrapper[] = [
  { id: 'w-coronas', prefix: '亗', suffix: '亗', styleName: 'Corona 亗', categories: ['gamer', 'chidos', 'competitivos'] },
  { id: 'w-corchetes', prefix: '『', suffix: '』', styleName: 'Corchete Gótico', categories: ['gamer', 'chidos', 'elegantes'] },
  { id: 'w-alas', prefix: '꧁', suffix: '꧂', styleName: 'Alas Reales', categories: ['gamer', 'chidos', 'oscuros'] },
  { id: 'w-estrellas', prefix: '★', suffix: '★', styleName: 'Estrellas', categories: ['gamer', 'chidos', 'aesthetic'] },
  { id: 'w-destellos', prefix: '✦', suffix: '✦', styleName: 'Destellos', categories: ['aesthetic', 'elegantes', 'chidos'] },
  { id: 'w-shime', prefix: '〆', suffix: '', styleName: 'Shime 〆', categories: ['gamer', 'competitivos', 'minimalistas'] },
  { id: 'w-tsu', prefix: '', suffix: 'ツ', styleName: 'Smile ツ', categories: ['gamer', 'divertidos', 'aesthetic'] },
  { id: 'w-me', prefix: '', suffix: 'メ', styleName: 'Katakana メ', categories: ['gamer', 'competitivos'] },
  { id: 'w-cruces', prefix: '乂', suffix: '乂', styleName: 'Espadas 乂', categories: ['gamer', 'oscuros', 'chidos'] },
  { id: 'w-noma', prefix: '', suffix: '々', styleName: 'Iteración 々', categories: ['gamer', 'competitivos', 'minimalistas'] },
  { id: 'w-rayo', prefix: '⚡', suffix: '⚡', styleName: 'Energía Rayo', categories: ['gamer', 'competitivos', 'chidos'] },
  { id: 'w-cuadrados', prefix: '【', suffix: '】', styleName: 'Marco Tryhard', categories: ['gamer', 'competitivos'] },
  { id: 'w-espaciado-corona', prefix: '亗 ', suffix: ' 亗', styleName: 'Corona Espaciada', categories: ['gamer', 'chidos', 'elegantes'] },
  { id: 'w-calavera', prefix: '☬', suffix: '☬', styleName: 'Emblema Místico', categories: ['oscuros', 'clan', 'chidos'] },
  { id: 'w-alas-epic', prefix: '༺', suffix: '༻', styleName: 'Alas Épicas', categories: ['gamer', 'chidos', 'oscuros'] },
  { id: 'w-alas-dobles', prefix: '꧁༺', suffix: '༻꧂', styleName: 'Alas Legendarias', categories: ['gamer', 'chidos', 'oscuros'] },
  { id: 'w-cara-x', prefix: '×͜× ', suffix: '', styleName: 'Dead Face ×͜×', categories: ['gamer', 'oscuros', 'divertidos'] },
  { id: 'w-corazon-soft', prefix: '•.¸♡ ', suffix: ' ♡¸.•', styleName: 'Corazón Dulce', categories: ['aesthetic', 'divertidos'] },
  { id: 'w-nubes', prefix: '°•.˜”*°• ', suffix: ' •°*”˜.•°', styleName: 'Marco Estelar', categories: ['aesthetic', 'elegantes'] },
  { id: 'w-realeza', prefix: '♛ ', suffix: ' ♛', styleName: 'Corona Imperial', categories: ['elegantes', 'clan', 'chidos'] },
  { id: 'w-flor', prefix: '🌸 ', suffix: ' 🌸', styleName: 'Sakura Flor', categories: ['aesthetic'] },
  { id: 'w-chispas', prefix: '┊✨ ', suffix: ' ✨┊', styleName: 'Vara de Luz', categories: ['aesthetic', 'elegantes'] },
  { id: 'w-luna', prefix: '☾ ', suffix: ' ☽', styleName: 'Luna Creciente', categories: ['aesthetic', 'oscuros'] },
  { id: 'w-diamante', prefix: '◈ ', suffix: ' ◈', styleName: 'Diamante Rombo', categories: ['elegantes', 'minimalistas'] },
  { id: 'w-brackets-soft', prefix: '〖', suffix: '〗', styleName: 'Llaves Suaves', categories: ['gamer', 'aesthetic', 'chidos'] },
  { id: 'w-clan-tag', prefix: '[', suffix: ']', styleName: 'Tag de Clan', categories: ['clan', 'competitivos', 'minimalistas'] }
];

export const CATEGORY_AFFIXES: Record<string, { prefixes: string[]; suffixes: string[] }> = {
  gamer: {
    prefixes: ['Titan', 'Shadow', 'Pixel', 'Zero', 'Vortex', 'Astro', 'Cyber', 'Neon', 'Hyper', 'Delta'],
    suffixes: ['X', 'Zen', 'Rush', 'Nex', 'Vibe', 'Core', 'Wave', 'Lux', 'Sky', 'Zone', 'Nox', 'Prime', '99', 'GG']
  },
  chidos: {
    prefixes: ['El', 'Don', 'Capitan', 'Sr', 'Rey', 'Lobo', 'Fenix', 'Master', 'Lord', 'Puma'],
    suffixes: ['Chido', 'King', 'Boss', 'Pro', 'God', 'Crack', 'Boy', 'Mex', 'Master', 'X', 'Top', 'Real']
  },
  aesthetic: {
    prefixes: ['Luna', 'Aura', 'Soft', 'Nube', 'Bruma', 'Star', 'Velvet', 'Sky', 'Rose', 'Honey'],
    suffixes: ['Aura', 'Luna', 'Zen', 'Sky', 'Bloom', 'Mist', 'Vibe', 'Glow', 'Pink', 'Cloud', 'Soul']
  },
  elegantes: {
    prefixes: ['Royal', 'Lord', 'Sir', 'Saint', 'Grand', 'Aura', 'Lux', 'Pure', 'Noble', 'Don'],
    suffixes: ['Elite', 'Royal', 'Lux', 'Crown', 'Prestige', 'Prime', 'Imperial', 'Majesty', 'Gold', 'Classic']
  },
  cortos: {
    prefixes: ['N', 'Z', 'V', 'K', 'R', 'X', 'A'],
    suffixes: ['X', '7', 'z', '_', '.', '0', '9', 'k']
  },
  divertidos: {
    prefixes: ['Casi', 'NoEra', 'Don', 'Tio', 'Senor', 'Mister', 'El', 'Doctor', 'Super', 'Chef'],
    suffixes: ['ConLag', 'SinPrisa', 'PingAlto', 'ModoSiesta', 'PanConLag', 'CeroDrama', 'OtroIntento', 'CasiGano', 'UyPerdon', 'ModoRelax']
  },
  oscuros: {
    prefixes: ['Shadow', 'Dark', 'Void', 'Nox', 'Ghost', 'Grim', 'Phantom', 'Abyss', 'Bleak', 'Hollow'],
    suffixes: ['Vanta', 'Nox', 'Reaper', 'Ghost', 'Void', 'Dark', 'Specter', 'Crypt', 'Shade', 'Doom']
  },
  competitivos: {
    prefixes: ['Apex', 'Aim', 'Clutch', 'Rush', 'Rank', 'Ace', 'Elite', 'Velo', 'Force', 'Strike'],
    suffixes: ['Aim', 'Clutch', 'Ace', 'Rush', 'Ranked', 'FPS', 'Tryhard', 'Main', 'Carry', 'Diff']
  },
  minimalistas: {
    prefixes: ['', '_', '.', 'x', 'i'],
    suffixes: ['', 'X', '7', 'z', '_', '.', '0']
  },
  clan: {
    prefixes: ['Team', 'Clan', 'Squad', 'Crew', 'Union', 'Order', 'Guild', 'Force', 'Dynasty', 'Alliance'],
    suffixes: ['Crew', 'Team', 'Squad', 'Union', 'Syndicate', 'Force', 'Legion', 'Esports', 'Club', 'Army']
  }
};

export const CURATED_CATEGORY_PRESETS: Record<string, string[]> = {
  gamer: [
    'NovaX', 'NexoRush', 'RayoZen', 'TitanNova', 'VortexX',
    'AstroNex', 'ShadowZen', 'PixelRush', 'NovaCore', 'RayoNox',
    'ZeroNova', 'NexoPrime', 'VantaX', 'AstroVex', 'ZenRush',
    '亗Nova亗', '『Nexo』', '꧁Vortex꧂', '★Rayo★', 'Novaツ'
  ],
  chidos: [
    'ShadowKing', 'NovaCrack', 'ElTitan', 'RayoBoss', 'FenixPro',
    '亗Shadow亗', '『NovaKing』', '★DonRayo★', 'LoboMex', 'VortexGod',
    'AstroCrack', 'ReyShadow', 'NovaMaster', 'PumaZen', 'FenixChido',
    'TitanReal', 'GhostMex', 'CapitanNova', 'ShadowBoss', 'MasterZen'
  ],
  aesthetic: [
    'LunaAura', 'NovaLuna', 'AuraNexa', 'SoftNova', 'LunaZen',
    'NubeNova', 'AuraSky', 'NovaBloom', 'BrumaZen', 'LunaVibe',
    'NexoAura', 'AstroLuna', '•.¸♡ Luna ♡¸.•', '✧Nova✧', '☾Aura☽',
    'StarNova', 'VelvetZen', 'HoneyNexa', 'CloudNova', 'RoseLuna'
  ],
  elegantes: [
    'NovaElite', 'LunaRoyal', 'NexoLux', 'AuraPrime', 'ZenRoyal',
    'NovaCrown', 'LuxNova', 'EliteNex', 'RoyalZen', 'NovaPrestige',
    '♛Nova♛', '⟦Luna⟧', 'ImperialZen', '◈Nexo◈', 'GrandNova',
    'SaintAura', 'LordVex', 'NobleNova', 'PrimeZen', 'LuxRoyal'
  ],
  cortos: [
    'Nox', 'Nova', 'Zyn', 'Kiro', 'Ryu',
    'Nexo', 'Vex', 'Zen', 'Kael', 'Lux',
    'Ziro', 'Ares', 'Nyx', 'Raze', 'Vanta',
    'NoxX', 'Nexo7', 'ZynX', 'KiroZen', 'LuxNova'
  ],
  divertidos: [
    'CasiPro', 'NoEraYo', 'PingAlto', 'ModoSiesta', 'PanConLag',
    'CeroDrama', 'OtroIntento', 'CasiGano', 'SinPrisa', 'DonDespiste',
    'UyPerdón', 'ModoRelax', 'CasiNova', 'NoEraNova', 'NovaConLag',
    'DoctorLag', 'SuperLento', 'TioPing', 'CeroKills', 'AbreCofres'
  ],
  oscuros: [
    'ShadowNova', 'DarkZen', 'VoidNexo', 'NovaVanta', 'NoxNova',
    'GhostZen', 'GrimNova', 'PhantomNexo', 'AbyssNova', 'NovaReaper',
    '×͜× Nova', '乂DarkZen乂', 'VoidReaper', 'NoxVanta', 'BleakNova',
    'HollowZen', 'SpecterNova', 'CryptNexo', 'DarkShade', 'DoomNova'
  ],
  competitivos: [
    'NovaAim', 'TitanZero', 'NexoPrime', 'AstroVex', 'VortexNova',
    'ZeroPulse', 'ShadowNex', 'PrimeNova', 'ClutchNova', 'NovaRush',
    'AceZen', 'NovaRanked', 'CarryNova', 'NovaDiff', 'ApexStrike',
    'ForceNova', 'TryhardZen', 'VeloNova', 'StrikeNex', 'RankOneNova'
  ],
  minimalistas: [
    'Nox', 'Nova', 'Zyn', 'Kiro', 'Ryu',
    'Nexo', 'Vex', 'Zen', 'Kael', 'Lux',
    '_Nova_', '.Nova.', 'NovaX', 'Nova7', 'Nvx'
  ],
  clan: [
    'Nova Crew', 'Zenith Team', 'Nexo Squad', 'Vortex Union', 'Astro Squad',
    'Nova Union', 'Pixel Crew', 'Zero Team', 'Eclipse Crew', 'Aura Squad',
    '[NV] Nova', 'Team Zenith', 'Clan Vortex', 'Nova Syndicate', 'Legion Nexo',
    'Order Nova', 'Dynasty Zen', 'Force Nova', 'Alliance Nex', 'Esports Nova'
  ]
};

export const UNICODE_TEXT_TRANSFORMS = [
  {
    name: 'Cursiva',
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const cursive = '𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵';
      return text.split('').map((c) => {
        const i = normal.indexOf(c);
        return i !== -1 ? Array.from(cursive)[i] || c : c;
      }).join('');
    }
  },
  {
    name: 'Cursiva Negrita',
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const boldScript = '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩';
      return text.split('').map((c) => {
        const i = normal.indexOf(c);
        return i !== -1 ? Array.from(boldScript)[i] || c : c;
      }).join('');
    }
  },
  {
    name: 'Gótica Fraktur',
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const gothic = '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ';
      return text.split('').map((c) => {
        const i = normal.indexOf(c);
        return i !== -1 ? Array.from(gothic)[i] || c : c;
      }).join('');
    }
  },
  {
    name: 'Gótica Negrita',
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const boldGothic = '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅';
      return text.split('').map((c) => {
        const i = normal.indexOf(c);
        return i !== -1 ? Array.from(boldGothic)[i] || c : c;
      }).join('');
    }
  },
  {
    name: 'Negrita Sans',
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const sansBold = '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵';
      return text.split('').map((c) => {
        const i = normal.indexOf(c);
        return i !== -1 ? Array.from(sansBold)[i] || c : c;
      }).join('');
    }
  },
  {
    name: 'Versalitas (Small Caps)',
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyz';
      const smallCaps = 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ';
      return text.toLowerCase().split('').map((c) => {
        const i = normal.indexOf(c);
        return i !== -1 ? smallCaps[i] : c;
      }).join('');
    }
  },
  {
    name: 'Doble Trazo',
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const doubleStruck = '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝢢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡';
      return text.split('').map((c) => {
        const i = normal.indexOf(c);
        return i !== -1 ? Array.from(doubleStruck)[i] || c : c;
      }).join('');
    }
  },
  {
    name: 'Monospace',
    transform: (text: string) => {
      const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      const mono = '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝔽𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿';
      return text.split('').map((c) => {
        const i = normal.indexOf(c);
        return i !== -1 ? Array.from(mono)[i] || c : c;
      }).join('');
    }
  }
];

export const JUEGOS_FAQ_ITEMS = [
  {
    question: '¿Qué son los nombres para juegos?',
    answer: 'Un nombre para juegos (o nick gamer) es el identificador único que utilizas en videojuegos, servidores y comunidades online para representar tu identidad, estilo de combate y personalidad en las partidas.'
  },
  {
    question: '¿Cómo puedo crear un nombre gamer?',
    answer: 'Escribe una palabra que te guste como base (un apodo, un animal o concepto), selecciona un estilo en nuestro generador (gamer, chidos, aesthetic, pro, clan) y genera decenas de combinaciones con símbolos y caracteres estilizados.'
  },
  {
    question: '¿Puedo copiar los nombres directamente?',
    answer: 'Sí. Cada resultado cuenta con un botón de copiado en 1 clic que guarda el texto estilizado en tu portapapeles con confirmación visual instantánea.'
  },
  {
    question: '¿Por qué algunos símbolos no aparecen correctamente?',
    answer: 'Ocurre cuando el motor de un videojuego o el sistema operativo del dispositivo no tiene instalada la tipografía para renderizar un carácter Unicode concreto, mostrando un recuadro vacío (□). Por eso recomendamos probar tu nick antes de confirmar cambios oficiales.'
  },
  {
    question: '¿Los nombres generados son gratuitos?',
    answer: 'Sí, todas las opciones y estilos generados son 100% gratuitos y libres de usar en cualquier juego, consola, PC o celular.'
  },
  {
    question: '¿Puedo usar una palabra propia?',
    answer: 'Por supuesto. Puedes ingresar tu propio nombre, apodo de la vida real o cualquier palabra gamer en la caja de texto y el generador la preservará combinándola con estilos y marcos.'
  },
  {
    question: '¿Cómo puedo hacer un nombre más original?',
    answer: 'Combina dos palabras cortas (ej. Nova + Zen = NovaZen), utiliza variantes ortográficas o añade decoraciones sutiles como corchetes 『』, coronas 亗 o caracteres en versalitas.'
  },
  {
    question: '¿Funcionan los caracteres Unicode en todos los juegos?',
    answer: 'No siempre. Juegos para celular como Free Fire o PUBG aceptan una gran variedad de símbolos, mientras que otros como Valorant o League of Legends pueden restringir caracteres especiales. Verifica siempre la vista previa en el juego.'
  }
];
