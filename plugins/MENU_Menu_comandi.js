import os from 'os';
import util from 'util';
import sizeFormatter from 'human-readable';
import MessageType from '@whiskeysockets/baileys';
import fs from 'fs';
import {performance} from 'perf_hooks';
const handler = async (m, {conn, usedPrefix}) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'));
  const groups = chats.filter(([id]) => id.endsWith('@g.us'));
  const used = process.memoryUsage();
  const {restrict} = global.db.data.settings[conn.user.jid] || {};
  const {autoread} = global.opts;
  const grup = './Menu2.jpg';
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const text = `

┊➤  ${usedPrefix} 𝒔𝒑𝒐𝒕𝒊𝒇𝒚 (+ 𝒏𝒐𝒎𝒆 𝒔𝒐𝒏𝒈) '𝒇𝒊𝒙
┊➤  ${usedPrefix} 𝒅𝒆𝒍𝒆𝒕𝒆𝒔𝒆𝒔𝒊𝒐𝒏 
┊       (𝟒𝒆𝒓𝒓 '𝒘𝒂𝒊𝒕 𝒎𝒆𝒔𝒔𝒂𝒈𝒆') '𝒇𝒊𝒙
┊➤  ${usedPrefix} 𝒔𝒂𝒗𝒆𝒑𝒍𝒖𝒈𝒊𝒏  '𝓷𝓮𝔀
┊➤  ${usedPrefix} 𝒅𝒆𝒍𝒆𝒕𝒆𝒑𝒍𝒖𝒈𝒊𝒏  '𝓷𝓮𝔀
┊➤  ${usedPrefix} 𝒔𝒂𝒗𝒆𝒇𝒊𝒍𝒆  '𝒇𝒊𝒙
┊➤  ${usedPrefix} 𝒈𝒆𝒕𝒇𝒊𝒍𝒆  '𝒇𝒊𝒙
┊➤  ${usedPrefix} 𝒂𝒊𝒊 (+ 𝒓𝒊𝒄𝒉𝒊𝒆𝒔𝒕𝒂) '𝓷𝓮𝔀
┊➤  ${usedPrefix} 𝒂𝒊_𝒗𝒐𝒄𝒆 (+ 𝒓𝒊𝒄𝒉𝒊𝒆𝒔𝒕𝒂) '𝒇𝒊𝒙
┊➤  ${usedPrefix} 𝒎𝒖𝒕𝒂 (+ 𝒖𝒔𝒆𝒓) '𝓷𝓮𝔀
┊➤  ${usedPrefix} 𝒎𝒖𝒕𝒆𝒕𝒊𝒎𝒆 (+ 𝒎/𝒉 + 𝒖𝒔𝒆𝒓) '𝓷𝓮𝔀
┊➤  ${usedPrefix} 𝒔𝒎𝒖𝒕𝒂 (+ 𝒖𝒔𝒆𝒓) '𝓷𝓮𝔀
┊➤  ${usedPrefix} 𝒄𝒂𝒓𝒕𝒐𝒐𝒏'𝓷𝓮𝔀
┊➤  ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂 𝒄𝒉𝒂𝒕𝒃𝒐𝒕 
┊➤  ${usedPrefix} 𝒂𝒃𝒃𝒓𝒂𝒄𝒄𝒊𝒐 + @
┊➤  ${usedPrefix} 𝒔𝒄𝒉𝒊𝒂𝒇𝒇𝒐 + @
┊➤  ${usedPrefix} 𝒕𝒓𝒊𝒈𝒈𝒆𝒓 + @
┊➤  ${usedPrefix} 𝒕𝒙𝒕/𝒕𝒙𝒕𝟏 + (𝒕𝒙𝒕)
┊➤  ${usedPrefix} 𝒃𝒂𝒍 (𝒄𝒉𝒆𝒄𝒌𝒂𝒕𝒊𝒗𝒐)
┊➤  ${usedPrefix} 𝒕𝒐𝒑 𝒎𝒆𝒔𝒔𝒂𝒈𝒈𝒊
┊➤  ${usedPrefix} 𝒈𝒓𝒖𝒑𝒑𝒊 𝒎𝒆𝒔𝒔𝒂𝒈𝒈𝒊
┊➤  ${usedPrefix} 𝒈𝒂𝒕𝒕𝒐
┊➤  ${usedPrefix} 𝒕𝒐𝒂𝒏𝒊𝒎𝒆
┊➤  ${usedPrefix} 𝒃𝒍𝒖𝒖𝒓
┊➤  ${usedPrefix} 𝒃𝒐𝒏𝒌
└───────⭓

┌──⭓ *𝑴𝑬𝑵𝑼 '𝑭𝑨𝑩𝑹𝑰'*⭓──
┊➤ 𝒇𝒂𝒃𝒓𝒊 𝒇𝒖𝒏𝒛𝒊𝒐𝒏𝒂 𝒔𝒆𝒏𝒛𝒂 𝒖𝒔𝒐
┊  𝒅𝒊 𝒑𝒓𝒆𝒇𝒊𝒔𝒔𝒐.
┊  𝒑𝒆𝒓 𝒂𝒕𝒕𝒊𝒗𝒂𝒓𝒍𝒐:
┊➤  𝑶𝑵: 𝒔𝒗𝒆𝒈𝒍𝒊𝒂 𝒇𝒂𝒃𝒓𝒊 
┊➤  𝑶𝑭𝑭: 𝒅𝒐𝒓𝒎𝒊 𝒇𝒂𝒃𝒓𝒊 
└───────⭓

┌──⭓ *𝑴𝑬𝑵𝑼 '𝑹𝑰𝑺𝑷𝑶𝑺𝑻𝑨'*⭓──
┊➤  𝒊𝒏𝒔𝒖𝒍𝒕𝒂 + @
┊➤   𝒎𝒊𝒏𝒂𝒄𝒄𝒊𝒂 + @ 
┊➤  𝒛𝒊𝒛𝒛𝒂𝒏𝒊𝒂 + @
┊➤  𝒔𝒆𝒈𝒓𝒆𝒕𝒐 + @
┊➤  𝒃𝒆𝒔𝒕𝒆𝒎𝒎𝒊𝒂
┊➤  𝒎𝒐𝒏𝒆𝒕𝒂 (𝒕𝒆𝒔𝒕𝒂 𝒐 𝒄𝒓𝒐𝒄𝒆)
└───────⭓
┌──⭓ *𝑴𝑬𝑵𝑼 '𝑨𝑼𝑫𝑰𝑶'*⭓──
┊➤  𝑫𝒓𝒂𝒎𝒂|𝑭𝒂𝒊𝒍|𝑮𝒂𝒎𝒆 𝑶𝒗𝒆𝒓|𝑻𝑮𝟓
┊➤  𝑻𝒊𝒎𝒊𝒅𝒂|𝑴𝒂 𝒄𝒉𝒆 𝒇𝒂𝒊|𝒓𝒖𝒕𝒕𝒐
┊➤  𝑺𝒆𝒊 𝒖𝒏𝒂 𝒎𝒐𝒏𝒆𝒍𝒍𝒂|𝑺𝒐𝒅𝒅𝒊𝒔𝒇𝒂𝒛𝒊𝒐𝒏𝒆
┊➤  𝑰𝒐 𝒑𝒂𝒈𝒐|𝑹𝒆𝒏𝒛𝒊|𝑹𝒐𝒔𝒂𝒓𝒊𝒐 𝑴𝒖𝒏𝒊𝒛
┊➤  𝑴𝒊𝒐 𝒇𝒊𝒈𝒍𝒊𝒐 𝒑𝒐𝒕𝒆𝒗𝒂 𝒎𝒐𝒓𝒊𝒓𝒆|𝑫𝒊𝒐 𝒄𝒂𝒏𝒄𝒂𝒓𝒐
└───────⭓
┌──⭓ *𝑴𝑬𝑵𝑼 '𝑺𝑻𝑰𝑪𝑲𝑬𝑹'*⭓──
┊➤  𝑺𝒕𝒆𝒗𝒆 𝑱𝒐𝒃𝒔
┊➤  𝑵𝒐𝒏 𝒄𝒊 𝒔𝒐𝒏𝒐
┊➤  𝑩𝒂𝒏𝒂𝒏𝒂
┊➤  𝑪𝒆𝒔𝒔𝒐
┊➤  𝑪𝒆𝒔𝒂𝒓𝒆
└───────⭓

┌──⭓ 𝐆𝐑𝐔𝐏𝐏𝐎 ⭓──
┊➤ ${usedPrefix} 𝒌𝒊𝒄𝒌 / 𝒂𝒅𝒅𝒊𝒐 / 𝒃𝒂𝒏 @
┊➤ ${usedPrefix} 𝒘𝒂𝒓𝒏 @
┊➤ ${usedPrefix} 𝒖𝒏𝒘𝒂𝒓𝒏 @
┊➤ ${usedPrefix} 𝒄𝒓𝒊𝒏𝒈𝒆 @ '𝓷𝓮𝔀
┊➤ ${usedPrefix} 𝒎𝒖𝒕𝒂 (+ 𝒖𝒔𝒆𝒓) '𝓷𝓮𝔀
┊➤ ${usedPrefix} 𝒎𝒖𝒕𝒆𝒕𝒊𝒎𝒆 (+ 𝒎/𝒉 + 𝒖𝒔𝒆𝒓) '𝓷𝓮𝔀
┊➤ ${usedPrefix} 𝒔𝒎𝒖𝒕𝒂 (+ 𝒖𝒔𝒆𝒓) '𝓷𝓮𝔀
┊➤ ${usedPrefix} 𝒃𝒂𝒍 (𝒄𝒐𝒖𝒏𝒕𝒎𝒔𝒈) @ '𝓷𝓮𝔀
┊➤ ${usedPrefix} 𝒕𝒐𝒑 𝒎𝒆𝒔𝒔𝒂𝒈𝒈𝒊 '𝓷𝓮𝔀
┊➤ ${usedPrefix} 𝒄𝒍𝒂𝒔𝒔𝒊𝒇𝒊𝒄𝒂 '𝓷𝓮𝔀
┊➤ ${usedPrefix} 𝒈𝒓𝒖𝒑𝒑𝒊 𝒎𝒆𝒔𝒔𝒂𝒈𝒈𝒊 '𝓷𝓮𝔀
┊➤ ${usedPrefix} 𝒅𝒆𝒍 (𝒎𝒔𝒈)
┊➤ ${usedPrefix} 𝒔𝒕𝒆𝒓𝒎𝒊𝒏𝒂 +𝟗𝟐
┊➤ ${usedPrefix} 𝒍𝒊𝒔𝒕𝒂𝒏𝒖𝒎 +𝟏
┊➤ ${usedPrefix} 𝒍𝒊𝒏𝒌
┊➤ ${usedPrefix} 𝒓𝒆𝒊𝒎𝒑𝒐𝒔𝒕𝒂
┊➤ ${usedPrefix} 𝒉𝒊𝒅𝒆𝒕𝒂𝒈 (𝒕𝒙𝒕)
┊➤ ${usedPrefix} 𝒕𝒂𝒈𝒂𝒍𝒍 / 𝒎𝒂𝒓𝒄𝒂𝒓 (𝒕𝒙𝒕)
┊➤ ${usedPrefix} 𝒊𝒏𝒂𝒕𝒕𝒊𝒗𝒊
┊➤ ${usedPrefix} 𝒗𝒊𝒂𝒊𝒏𝒂𝒕𝒕𝒊𝒗𝒊
┊➤ ${usedPrefix} 𝒑𝒓𝒐𝒎𝒖𝒐𝒗𝒊 / 𝒎𝒆𝒕𝒕𝒊𝒂𝒅𝒎𝒊𝒏 @
┊➤ ${usedPrefix} 𝒓𝒆𝒕𝒓𝒐𝒄𝒆𝒅𝒊 / 𝒕𝒐𝒈𝒍𝒊𝒂𝒅𝒎𝒊𝒏 @
┊➤ ${usedPrefix} 𝒈𝒓𝒖𝒑𝒑𝒐 𝒂𝒑𝒆𝒓𝒕𝒐 / 𝒄𝒉𝒊𝒖𝒔𝒐
┊➤ ${usedPrefix} 𝒏𝒐𝒎𝒆 (𝒕𝒙𝒕)
┊➤ ${usedPrefix} 𝒔𝒆𝒕𝒃𝒆𝒏𝒗𝒆𝒏𝒖𝒕𝒐 (@𝒖𝒔𝒆𝒓 𝒕𝒙𝒕)
┊➤ ${usedPrefix} 𝒔𝒆𝒕𝒂𝒅𝒅𝒊𝒐 (@𝒖𝒔𝒆𝒓 𝒕𝒙𝒕)
┊➤ ${usedPrefix} 𝒂𝒅𝒎𝒊𝒏
┊➤ ${usedPrefix} 𝒑𝒊𝒏𝒈
└───────⭓

════ •⊰❂⊱• ════ 

┌──⭓ 𝐌𝐄𝐃𝐈𝐀 ⭓──
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒑 (𝒕𝒙𝒕)
┊➤ ${usedPrefix} 𝒕𝒕𝒑 (𝒕𝒙𝒕)
┊➤ ${usedPrefix} 𝒈𝒕𝒕𝒔 (𝒕𝒙𝒕)
┊➤ ${usedPrefix} 𝒅𝒂𝒅𝒐
┊➤ ${usedPrefix} 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 / 𝒔 (𝒇𝒐𝒕𝒐/𝒗𝒊𝒅𝒆𝒐)
┊➤ ${usedPrefix} 𝒘𝒎 (𝒔𝒕𝒊𝒄𝒌𝒆𝒓)
┊➤ ${usedPrefix} 𝒆𝒎𝒐𝒋𝒊𝒎𝒊𝒙 (𝒆𝒎𝒐𝒋𝒊+𝒆𝒎𝒐𝒋𝒊)
┊➤ ${usedPrefix} 𝒑𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒕 / 𝒄𝒆𝒓𝒄𝒂 
┊➤ ${usedPrefix} 𝒘𝒉𝒂𝒕𝒎𝒖𝒔𝒊𝒄 (𝒂𝒖𝒅𝒊𝒐)
┊➤ ${usedPrefix} 𝒒𝒓𝒄𝒐𝒅𝒆 (𝒕𝒙𝒕)
┊➤ ${usedPrefix} 𝒍𝒆𝒈𝒈𝒊 (𝒇𝒐𝒕𝒐)
┊➤ ${usedPrefix} 𝒔𝒕𝒚𝒍𝒆𝒕𝒆𝒙𝒕 (𝒕𝒙𝒕)
┊➤ ${usedPrefix} 𝒅𝒆𝒔𝒕𝒓𝒂𝒗𝒂
┊➤ ${usedPrefix} 𝒕𝒐𝒗𝒊𝒅𝒆𝒐 (𝒔𝒕𝒊𝒄𝒌𝒆𝒓)
┊➤ ${usedPrefix} 𝒕𝒐𝒈𝒊𝒇 (𝒔𝒕𝒊𝒄𝒌𝒆𝒓)
┊➤ ${usedPrefix} 𝒕𝒐𝒈𝒊𝒇𝒂𝒖𝒅 (𝒗𝒊𝒅𝒆𝒐)
┊➤ ${usedPrefix} 𝒕𝒐𝒎𝒑𝟑 (𝒗𝒊𝒅𝒆𝒐/𝒂𝒖𝒅𝒊𝒐)
┊➤ ${usedPrefix} 𝒕𝒐𝒂𝒖𝒅𝒊𝒐 (𝒗𝒊𝒅𝒆𝒐/𝒂𝒖𝒅𝒊𝒐)
┊➤ ${usedPrefix} 𝒕𝒐𝒑𝒕𝒕 (𝒗𝒊𝒅𝒆𝒐)
┊➤ ${usedPrefix} 𝒕𝒐𝒖𝒓𝒍 (𝒇𝒐𝒕𝒐/𝒗𝒊𝒅𝒆𝒐)
└───────⭓

 ════ •⊰❂⊱• ════ 

┌──⭓ 𝐋𝐎𝐆𝐇𝐈 ⭓──
┊➤ ${usedPrefix} 𝒎𝒆𝒏𝒖𝒍𝒐𝒈𝒉𝒊
└───────⭓

 ════ •⊰❂⊱• ════ 
┌──⭓ 𝐒𝐏𝐄𝐂𝐈𝐀𝐋𝐈 ⭓──
┊➤ ${usedPrefix} 𝒈𝒂𝒚 @
┊➤ ${usedPrefix} 𝒇𝒓𝒐𝒄𝒊𝒐 @
┊➤ ${usedPrefix} 𝒍𝒆𝒔𝒃𝒊𝒄𝒂 @
┊➤ ${usedPrefix} 𝒑𝒖𝒕𝒕𝒂𝒏𝒂 @
┊➤ ${usedPrefix} 𝒑𝒖𝒕𝒕𝒂𝒏𝒊𝒆𝒓𝒆 @
┊➤ ${usedPrefix} 𝒏𝒆𝒓𝒐 @
┊➤ ${usedPrefix} 𝒏𝒆𝒓𝒂 @
┊➤ ${usedPrefix} 𝒓𝒂𝒏𝒅𝒐𝒎 @
┊➤ ${usedPrefix} 𝒂𝒎𝒐𝒓𝒆 @
┊➤ ${usedPrefix} 𝒂𝒊𝒊 (𝑨𝑰)
┊➤ ${usedPrefix} 𝒂𝒊_𝒗𝒐𝒄𝒆 (𝑨𝑰_𝒗𝒐𝒄𝒆)
┊➤ ${usedPrefix} 𝒘𝒊𝒌𝒊𝒑𝒆𝒅𝒊𝒂 (𝒕𝒙𝒕)
┊➤ ${usedPrefix} 𝒎𝒆𝒕𝒆𝒐 / 𝒕𝒆𝒎𝒑𝒐 (𝒄𝒊𝒕𝒕𝒂̀)
┊➤ ${usedPrefix} 𝒅𝒐𝒙 @
┊➤ ${usedPrefix} 𝒕𝒐𝒑𝒈𝒂𝒚𝒔
┊➤ ${usedPrefix} 𝒕𝒐𝒑𝒔𝒄𝒊𝒎𝒎𝒊𝒆
┊➤ ${usedPrefix} 𝒔𝒍𝒐𝒕
┊➤ ${usedPrefix} 𝒄𝒂𝒍𝒄 (𝟏+𝟏)
┊➤ ${usedPrefix} 𝒂𝒖𝒕𝒐𝒂𝒅𝒎𝒊𝒏
┊➤ ${usedPrefix} 𝒓𝒖𝒃𝒂 (𝒂𝒅𝒎𝒊𝒏) '𝓷𝓮𝔀
┊➤ ${usedPrefix} 𝒓𝒆𝒈𝒂𝒍𝒐 (𝒂𝒅𝒎𝒊𝒏) '𝓷𝓮𝔀
┊ 𝒓𝒆𝒈𝒂𝒍𝒐 𝒆 𝒓𝒖𝒃𝒂 𝒉𝒂𝒏𝒏𝒐 𝒆𝒇𝒇𝒆𝒕𝒕𝒐 𝒔𝒖 𝒕𝒖𝒕𝒕𝒊
┊➤ ${usedPrefix} 𝒕𝒐𝒑 𝒎𝒆𝒔𝒔𝒂𝒈𝒈𝒊 '𝓷𝓮𝔀
┊➤ ${usedPrefix} 𝒗𝒊𝒓𝒖𝒔𝟏/𝟏/𝟐/𝟑𝒆𝒄𝒄 '𝓷𝓮𝔀
└───────⭓

 ════ •⊰❂⊱• ════ 

┌──⭓ 𝐏𝐑𝐎𝐏𝐑𝐈𝐄𝐓𝐀𝐑𝐈𝐎 ⭓──
┊➤ ${usedPrefix} 𝒃𝒂𝒏𝒖𝒔𝒆𝒓 @
┊➤ ${usedPrefix} 𝒖𝒏𝒃𝒂𝒏𝒖𝒔𝒆𝒓 @
┊➤ ${usedPrefix} 𝒃𝒍𝒐𝒄𝒌 @
┊➤ ${usedPrefix} 𝒖𝒏𝒃𝒍𝒐𝒄𝒌 @
┊➤ ${usedPrefix} 𝒋𝒐𝒊𝒏
┊➤ ${usedPrefix} 𝒐𝒖𝒕
┊➤ ${usedPrefix} 𝒔𝒑𝒂𝒎𝒈𝒑 (𝒍𝒊𝒏𝒌)
┊➤ ${usedPrefix} 𝒄𝒍𝒆𝒂𝒓𝒕𝒎𝒑
┊➤ ${usedPrefix} 𝒃𝒍𝒐𝒄𝒌𝒍𝒊𝒔𝒕
┊➤ ${usedPrefix} 𝒃𝒂𝒏𝒍𝒊𝒔𝒕
┊➤ ${usedPrefix} 𝒃𝒂𝒏𝒄𝒉𝒂𝒕
┊➤ ${usedPrefix} 𝒖𝒏𝒃𝒂𝒏𝒄𝒉𝒂𝒕
└───────⭓

════ •⊰❂⊱• ════ 

┌──⭓ 𝐀𝐓𝐓𝐈𝐕𝐀 ⭓──
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒓𝒆𝒔𝒕𝒓𝒊𝒄𝒕
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒑𝒓𝒊𝒗𝒂𝒕𝒐
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒔𝒐𝒍𝒐𝒈𝒓𝒖𝒑𝒑𝒐
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒖𝒕𝒐𝒓𝒆𝒂𝒅
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒃𝒆𝒏𝒗𝒆𝒏𝒖𝒕𝒐
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌𝒉𝒕𝒕𝒑𝒔
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒔𝒑𝒂𝒎
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒅𝒆𝒕𝒆𝒄𝒕
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒆𝒍𝒊𝒎𝒊𝒏𝒂
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒗𝒊𝒆𝒘𝒐𝒏𝒄𝒆
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒕𝒓𝒂𝒗𝒂
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒑𝒂𝒌𝒊
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒎𝒐𝒅𝒐𝒂𝒅𝒎𝒊𝒏
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒖𝒕𝒐𝒔𝒕𝒊𝒄𝒌𝒆𝒓
┊➤ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒄𝒉𝒂𝒕𝒃𝒐𝒕
└───────⭓

┌─𝑱𝒐𝒊𝒏 𝒘𝒊𝒕𝒉 𝒖𝒔
┊─• * 𝑺𝒄𝒂𝒓𝒊𝒄𝒂𝒓𝒆 𝑴𝒐𝒐𝒏𝑪𝒍𝒐𝒖𝒅𝒔⇝𝐁Ꮻ𝐓 *
┊ https://github.com/Fabri115/botwhaita.git
┊─• * 𝑬𝒏𝒕𝒓𝒂 𝒊𝒏 𝐌ꮻꮻ𝖓☾︎ℓꮻ𝕦𝜕𝖘 *
┊ https://chat.whatsapp.com/InZqSk4lsyzKJUtSWfsdjF 
┊─• * 𝑻𝒖𝒕𝒐𝒓𝒊𝒂𝒍: *
┊ https://www.youtube.com/watch?v=6Cg1yUMz-Do
└── ⇝ *ꪶ͢𝑴☁️ꫂ ᵉᵈᶦᶻ ²⁰²³*
`.trim();
  conn.sendFile(m.chat, grup, 'errop.jpg', text, m, false );
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(comandi)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}
