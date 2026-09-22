export interface GameCategory {
  id: string;
  name: string;
  icon: string;
  badge: string;
  description: string;
}

export const GAME_CATEGORIES: GameCategory[] = [
  { id: 'gamer', name: 'Gamer', icon: '🎮', badge: 'Gamer', description: 'Nicks intensos y directos para partidas competitivas' },
  { id: 'aesthetic', name: 'Aesthetic', icon: '✨', badge: 'Aesthetic', description: 'Estilos limpios, armoniosos y visualmente suaves' },
  { id: 'elegante', name: 'Elegante', icon: '👑', badge: 'Elegante', description: 'Nombres distinguidos con un toque regio y sofisticado' },
  { id: 'pro', name: 'Pro', icon: '⚡', badge: 'Pro', description: 'Apodos tryhard y enérgicos de alto nivel' },
  { id: 'fantasia', name: 'Fantasía', icon: '🌌', badge: 'Fantasía', description: 'Inspirados en mundos místicos, magia y leyendas' },
  { id: 'gracioso', name: 'Gracioso', icon: '😄', badge: 'Gracioso', description: 'Nombres ingeniosos y cómicos para jugar con amigos' },
  { id: 'oscuro', name: 'Oscuro', icon: '🌙', badge: 'Oscuro', description: 'Nicks misteriosos, sombríos y góticos' },
  { id: 'minimalista', name: 'Minimalista', icon: '🧊', badge: 'Minimal', description: 'Combinaciones cortas, directas y sin sobrecarga' },
  { id: 'competitivo', name: 'Competitivo', icon: '🏆', badge: 'Ranked', description: 'Ideal para torneos, tablas de clasificación y PvP' },
  { id: 'clan', name: 'Clan', icon: '👥', badge: 'Clan', description: 'Identidades y tags diseñadas para equipos y escuadras' }
];

export const QUICK_BASE_WORDS = [
  'Nova',
  'Luna',
  'Rayo',
  'Nexo',
  'Astro',
  'Zen',
  'Fénix',
  'Aura',
  'Vortex',
  'Pixel'
];

export interface SymbolWrapper {
  id: string;
  prefix: string;
  suffix: string;
  styleName: string;
  categories: string[];
}

export const GAME_SYMBOL_WRAPPERS: SymbolWrapper[] = [
  { id: 'w-coronas', prefix: '亗', suffix: '亗', styleName: 'Corona 亗', categories: ['gamer', 'pro', 'elegante'] },
  { id: 'w-corchetes', prefix: '『', suffix: '』', styleName: 'Corchete Gótico', categories: ['gamer', 'elegante', 'minimalista'] },
  { id: 'w-alas', prefix: '꧁', suffix: '꧂', styleName: 'Alas Reales', categories: ['gamer', 'pro', 'fantasia'] },
  { id: 'w-estrellas', prefix: '★', suffix: '★', styleName: 'Estrellas', categories: ['gamer', 'pro', 'aesthetic'] },
  { id: 'w-destellos', prefix: '✦', suffix: '✦', styleName: 'Destellos', categories: ['aesthetic', 'fantasia', 'elegante'] },
  { id: 'w-shime', prefix: '〆', suffix: '', styleName: 'Shime 〆', categories: ['gamer', 'pro', 'minimalista'] },
  { id: 'w-tsu', prefix: '', suffix: 'ツ', styleName: 'Smile ツ', categories: ['gamer', 'gracioso', 'aesthetic'] },
  { id: 'w-me', prefix: '', suffix: 'メ', styleName: 'Katakana メ', categories: ['gamer', 'pro'] },
  { id: 'w-cruces', prefix: '乂', suffix: '乂', styleName: 'Espadas 乂', categories: ['gamer', 'pro', 'oscuro'] },
  { id: 'w-noma', prefix: '', suffix: '々', styleName: 'Iteración 々', categories: ['gamer', 'pro', 'minimalista'] },
  { id: 'w-rayo', prefix: '⚡', suffix: '⚡', styleName: 'Energía Rayo', categories: ['pro', 'gamer', 'competitivo'] },
  { id: 'w-cuadrados', prefix: '【', suffix: '】', styleName: 'Marco Tryhard', categories: ['gamer', 'pro', 'competitivo'] },
  { id: 'w-espaciado-corona', prefix: '亗 ', suffix: ' 亗', styleName: 'Corona Espaciada', categories: ['gamer', 'pro'] },
  { id: 'w-calavera', prefix: '☬', suffix: '☬', styleName: 'Emblema Místico', categories: ['fantasia', 'oscuro', 'clan'] },
  { id: 'w-alas-epic', prefix: '༺', suffix: '༻', styleName: 'Alas Épicas', categories: ['gamer', 'fantasia', 'pro'] },
  { id: 'w-alas-dobles', prefix: '꧁༺', suffix: '༻꧂', styleName: 'Alas Legendarias', categories: ['gamer', 'pro', 'fantasia'] },
  { id: 'w-cara-x', prefix: '×͜× ', suffix: '', styleName: 'Dead Face ×͜×', categories: ['gamer', 'pro', 'oscuro'] },
  { id: 'w-corazon-soft', prefix: '•.¸♡ ', suffix: ' ♡¸.•', styleName: 'Corazón Dulce', categories: ['aesthetic', 'gracioso'] },
  { id: 'w-nubes', prefix: '°•.˜”*°• ', suffix: ' •°*”˜.•°', styleName: 'Marco Estelar', categories: ['aesthetic', 'fantasia'] },
  { id: 'w-realeza', prefix: '♛ ', suffix: ' ♛', styleName: 'Corona Imperial', categories: ['elegante', 'pro', 'clan'] },
  { id: 'w-flor', prefix: '🌸 ', suffix: ' 🌸', styleName: 'Sakura Flor', categories: ['aesthetic'] },
  { id: 'w-chispas', prefix: '┊✨ ', suffix: ' ✨┊', styleName: 'Vara de Luz', categories: ['aesthetic', 'fantasia'] },
  { id: 'w-luna', prefix: '☾ ', suffix: ' ☽', styleName: 'Luna Creciente', categories: ['aesthetic', 'oscuro', 'fantasia'] },
  { id: 'w-diamante', prefix: '◈ ', suffix: ' ◈', styleName: 'Diamante Rombo', categories: ['elegante', 'minimalista'] },
  { id: 'w-brackets-soft', prefix: '〖', suffix: '〗', styleName: 'Llaves Suaves', categories: ['gamer', 'aesthetic'] },
  { id: 'w-clan-tag', prefix: '[', suffix: ']', styleName: 'Tag de Clan', categories: ['clan', 'competitivo', 'minimalista'] }
];

export const CATEGORY_AFFIXES: Record<string, { prefixes: string[]; suffixes: string[] }> = {
  gamer: {
    prefixes: ['Titan', 'Shadow', 'Pixel', 'Zero', 'Vortex', 'Astro', 'Cyber', 'Echo', 'Neon', 'Hyper'],
    suffixes: ['X', 'Zen', 'Rush', 'Nex', 'Vibe', 'Core', 'Wave', 'Lux', 'Sky', 'Zone', 'Nox', 'Prime', '99', 'GG']
  },
  aesthetic: {
    prefixes: ['Luna', 'Aura', 'Soft', 'Nube', 'Bruma', 'Star', 'Velvet', 'Sky', 'Rose', 'Honey'],
    suffixes: ['Aura', 'Luna', 'Zen', 'Sky', 'Bloom', 'Mist', 'Vibe', 'Glow', 'Pink', 'Cloud', 'Soul']
  },
  elegante: {
    prefixes: ['Royal', 'Lord', 'Sir', 'Saint', 'Grand', 'Aura', 'Lux', 'Pure', 'Noble', 'Don'],
    suffixes: ['Elite', 'Royal', 'Lux', 'Crown', 'Prestige', 'Prime', 'Imperial', 'Majesty', 'Gold', 'Classic']
  },
  pro: {
    prefixes: ['Pro', 'Apex', 'Hyper', 'Master', 'Omega', 'Ultra', 'True', 'Alpha', 'Max', 'Top'],
    suffixes: ['Aim', 'Rush', 'Ace', 'Clutch', 'Flash', 'God', '7', '99', 'FPS', 'X', 'Pro', 'Shot']
  },
  fantasia: {
    prefixes: ['Mythic', 'Astral', 'Dragon', 'Rune', 'Valkyrie', 'Titan', 'Arcane', 'Eldritch', 'Chrono', 'Solar'],
    suffixes: ['Fénix', 'Drake', 'Lore', 'Myst', 'Soul', 'Spell', 'Aether', 'Rune', 'Knight', 'Spirit']
  },
  gracioso: {
    prefixes: ['Casi', 'NoEra', 'Don', 'Tio', 'Senor', 'Mister', 'El', 'Doctor', 'Super', 'Chef'],
    suffixes: ['ConLag', 'SinPrisa', 'PingAlto', 'ModoSiesta', 'PanConLag', 'CeroDrama', 'OtroIntento', 'CasiGano', 'UyPerdon', 'ModoRelax']
  },
  oscuro: {
    prefixes: ['Shadow', 'Dark', 'Void', 'Nox', 'Ghost', 'Grim', 'Phantom', 'Abyss', 'Bleak', 'Hollow'],
    suffixes: ['Vanta', 'Nox', 'Reaper', 'Ghost', 'Void', 'Dark', 'Specter', 'Crypt', 'Shade', 'Doom']
  },
  minimalista: {
    prefixes: ['', '_', '.', 'x', 'i'],
    suffixes: ['', 'X', '7', 'z', '_', '.', '0']
  },
  competitivo: {
    prefixes: ['Apex', 'Aim', 'Clutch', 'Rush', 'Rank', 'Ace', 'Elite', 'Velo', 'Force', 'Strike'],
    suffixes: ['Aim', 'Clutch', 'Ace', 'Rush', 'Ranked', 'FPS', 'Tryhard', 'Main', 'Carry', 'Diff']
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
  aesthetic: [
    'LunaAura', 'NovaLuna', 'AuraNexa', 'SoftNova', 'LunaZen',
    'NubeNova', 'AuraSky', 'NovaBloom', 'BrumaZen', 'LunaVibe',
    'NexoAura', 'AstroLuna', '•.¸♡ Luna ♡¸.•', '✧Nova✧', '☾Aura☽',
    'StarNova', 'VelvetZen', 'HoneyNexa', 'CloudNova', 'RoseLuna'
  ],
  elegante: [
    'NovaElite', 'LunaRoyal', 'NexoLux', 'AuraPrime', 'ZenRoyal',
    'NovaCrown', 'LuxNova', 'EliteNex', 'RoyalZen', 'NovaPrestige',
    '♛Nova♛', '⟦Luna⟧', 'ImperialZen', '◈Nexo◈', 'GrandNova',
    'SaintAura', 'LordVex', 'NobleNova', 'PrimeZen', 'LuxRoyal'
  ],
  pro: [
    'NovaAim', 'RushNova', 'ApexZen', 'NovaClutch', 'AceNova',
    '⚡Nova⚡', '【Nova】', 'Nova7', 'FlashZen', 'ProNexo',
    '亗ProNova亗', 'NovaFPS', 'OmegaZen', 'HyperNova', 'TryhardNex',
    'AimGod', 'RushZen', 'ClutchNova', 'Nova99', 'TopGunNova'
  ],
  fantasia: [
    'NovaFénix', 'AstralZen', 'MythicNova', 'RuneNexo', 'DragonNova',
    'ValkyrieZen', 'NovaTitan', 'ArcaneNova', 'ChronoZen', 'SolarNova',
    '꧁༺Fénix༻꧂', '☬Nova☬', 'AetherZen', 'NovaLore', 'SpiritNexo',
    'EldritchNova', 'DrakeZen', 'MystNova', 'RuneZen', 'ShadowDragon'
  ],
  gracioso: [
    'CasiPro', 'NoEraYo', 'PingAlto', 'ModoSiesta', 'PanConLag',
    'CeroDrama', 'OtroIntento', 'CasiGano', 'SinPrisa', 'DonDespiste',
    'UyPerdón', 'ModoRelax', 'CasiNova', 'NoEraNova', 'NovaConLag',
    'DoctorLag', 'SuperLento', 'TioPing', 'CeroKills', 'AbreCofres'
  ],
  oscuro: [
    'ShadowNova', 'DarkZen', 'VoidNexo', 'NovaVanta', 'NoxNova',
    'GhostZen', 'GrimNova', 'PhantomNexo', 'AbyssNova', 'NovaReaper',
    '×͜× Nova', '乂DarkZen乂', 'VoidReaper', 'NoxVanta', 'BleakNova',
    'HollowZen', 'SpecterNova', 'CryptNexo', 'DarkShade', 'DoomNova'
  ],
  minimalista: [
    'Nox', 'Nova', 'Zyn', 'Kiro', 'Ryu',
    'Nexo', 'Vex', 'Zen', 'Kael', 'Lux',
    'Ziro', 'Ares', 'Nyx', 'Raze', 'Vanta',
    'NoxX', 'Nexo7', 'ZynX', 'KiroZen', 'LuxNova'
  ],
  competitivo: [
    'NovaAim', 'TitanZero', 'NexoPrime', 'AstroVex', 'VortexNova',
    'ZeroPulse', 'ShadowNex', 'PrimeNova', 'ClutchNova', 'NovaRush',
    'AceZen', 'NovaRanked', 'CarryNova', 'NovaDiff', 'ApexStrike',
    'ForceNova', 'TryhardZen', 'VeloNova', 'StrikeNex', 'RankOneNova'
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
      const doubleStruck = '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡';
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
      const mono = '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿';
      return text.split('').map((c) => {
        const i = normal.indexOf(c);
        return i !== -1 ? Array.from(mono)[i] || c : c;
      }).join('');
    }
  }
];

export const JUEGOS_FAQ_ITEMS = [
  {
    question: '¿Cómo puedo crear un nombre para juegos?',
    answer: 'Escribe una palabra que quieras utilizar como base, selecciona un estilo (gamer, aesthetic, pro, clan, etc.) y genera diferentes combinaciones. Después puedes copiar la opción que más te guste y probarla en tu juego.'
  },
  {
    question: '¿Puedo generar nombres sin escribir mi nombre?',
    answer: 'Sí. Puedes dejar el campo vacío y explorar ideas generadas por diferentes estilos automáticamente con un solo clic.'
  },
  {
    question: '¿Puedo copiar los nombres directamente?',
    answer: 'Sí. Cada resultado incluye un botón de copiar para que puedas llevarlo directamente al portapapeles y pegarlo en cualquier juego o red social.'
  },
  {
    question: '¿Los nombres con símbolos funcionan en todos los juegos?',
    answer: 'No siempre. Cada juego puede tener reglas diferentes para los caracteres permitidos. Comprueba el resultado dentro del juego antes de confirmarlo definitivamente.'
  },
  {
    question: '¿Qué es un nick gamer?',
    answer: 'Es el nombre o identificador que utilizas como identidad dentro de una comunidad, plataforma online o videojuego.'
  },
  {
    question: '¿Qué nombre puedo usar si el que quiero ya está ocupado?',
    answer: 'Puedes mantener la palabra principal y crear una pequeña variación. Por ejemplo, si Nova está ocupado, puedes probar NovaX, NovaZen, NovaLux o una combinación con números o símbolos.'
  },
  {
    question: '¿Es mejor utilizar un nombre corto?',
    answer: 'Un nombre corto suele ser más fácil de leer, pronunciar y recordar durante las partidas, aunque depende de tus preferencias y del límite de caracteres de la plataforma.'
  },
  {
    question: '¿Puedo crear nombres para clanes?',
    answer: 'Sí. Para nombres destinados a grupos o equipos, es mejor pensar en una palabra o tag que funcione para todos los integrantes. Puedes consultar nuestra sección específica de nombres para clanes.'
  },
  {
    question: '¿Puedo utilizar letras bonitas en un nombre gamer?',
    answer: 'Sí, cuando la plataforma acepta los caracteres utilizados. Las letras estilizadas suelen basarse en caracteres Unicode, por lo que la compatibilidad puede variar entre títulos.'
  },
  {
    question: '¿Tengo que instalar algo?',
    answer: 'No. El generador funciona 100% en tu navegador web de forma instantánea y gratuita, tanto en celulares como en computadoras.'
  }
];
