/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUy47iRhT9lai2jQYMxg+klmIexjaNediAcTSLwi6b8rtdZYMZsR2NIiWLLFCy4B/5hMh098wskkln5XLV1b3nnnPu/QSSFBM0QRXofQJZjktIUX2kVYZAD/QLz0M5aAAXUgh6QNV8fzo7nWJlEAnLSO88DVlW0/iVLGebne9hFG/XVJyhZPoIzg2QFbsIOz9IaLAMPlbSSZL1rij1W1yLiRfHBdc8LIaeqmlWPiGK0bbRMXwE5zojxDlO/FG2RzHKYTRB1Rzi/H3wW1ra3Dt9Y6ql5KjODoGA1+rJwLOyiGxlzxScXFnNVqGPyfvgy0u97wYWDkRb7S7WD0YnlU8ZjtyxPyLMyfQWUdaf+jsRL17gE+wnyFVdlFBMq3fzvh0/R6o69wopLSNoos0xTDrDsOgO42xG492yaaxYeFKHyup9wG2NWNlwwiT2k9QNeE7uVNNdEGmexRbhWHdXWt71M54xBv73wOf5m1fC/8O7o1Axego5ZiyvKtPEytwsLD3K5K3Mss2hyA+F7HjEoRqN3ge/sg7MsiITZzRQh8Zypkub1UAp2tO0q1KYzAom25ED5CyTfIMPaZH/COUYmf7J8KR4MJDd9tBJqpG3Dv3h83a9U4TmZjMYmfS4UX1rs3OWYjEqF2g0mbm+0IwD2UnHSnfDBc3ttmU09Tbb3KXQH/qP945CVKku6DHnBsiRjwnNIcVpUt912g0A3dJATo7onV2wzklaBpLdXyWKNZROsVdIG03tRzZeSQbM98sRm9t6EbrqI2iALE8dRAhyFUxomldTRAj0EQG9Xz42QIKO9EW3ezWmATycE7pKiixKofsm6tsjdJy0SKhRJc6gPqAc9FrfrhGlOPFJTWORwNzZ4xIN9pAS0PNgRNDXBlGOXNCjeYG+Du0gdWveB7ok2ZZigQaI73pgF/SAyPIcwwotocP22uLP5MOhzgqz7EOCKGiABNbB4Ha9/HG7Xn6/XS+/1d+fbtfL59v18uvtevnzdr389frw+fVcB34BDRDdi7SFlsi0Bb4ttjie5+pC9cP5a381HBdRiCNSI51xNo23i5abqCd/u5UMSZpIUs35Gx9vvnoR7vkhUbacNzF24lM5b60474CShGtqdspMTcE+Pk+WxmgVK8E/JgE9sBqrLXm7NlmFU+XYVDt62d/n9nK8fODb5bizI/O+MMpLZws1xyXzthcy405ke0ulvwmUcoBTaulT2nHbsiAKB1pEkVSbsAFcVGIHfV/s6WGSyQZp2vxen3mRbhnyiHFPTzqVhK1UhF7yPAiQyE4cJwuCSkV8hywXQ8ZbtqRcYDRzlkAtNuWpGRpPG2HWfg6sN8ffJy563XT4bsZa6frXw+i+OF4l/S/lX3DX/mydG9+leN1E/zLNfVhmx/YsqcK4afAnUZ4lgpJ1H8pqA3Vz1Bw7EIervazt2QM4nz82QBZB6qV5DHqAxDsIGiBPi9rtauKlP6g06Ktqf+HrddcRJFT6NkEmjhGhMM5Aj+H5bkdgeIZ/iZrnaaZAsgc90IkjJjDA+W8AL0fjjgcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
