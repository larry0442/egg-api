'use strict';
const Service = require('egg').Service;

class HomeService extends Service {
  async mysql() {
    const data = [
      {
        brand: 'VIVO',
        create_time: '2020-11-25 11:51:10',
        current_holder: '裕鸿',
        id: 97,
        model: 'Y51',
        original_holder: '梦华',
        platform: 'Android',
        remarks: '',
        system_version: '5.0.2',
      },
      {
        brand: 'OPPO',
        create_time: '2020-11-24 16:46:06',
        current_holder: '梦华',
        id: 96,
        model: 'A5',
        original_holder: '成印',
        platform: 'Android',
        remarks: '',
        system_version: '8.1.0',
      },
      {
        brand: '小米',
        create_time: '2020-11-24 16:45:50',
        current_holder: '润珠',
        id: 95,
        model: 'MI 4LTE',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: '小米',
        create_time: '2020-11-24 16:44:55',
        current_holder: '晓彤',
        id: 94,
        model: 'Red Mi 4A',
        original_holder: ' 成印',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: '小米',
        create_time: '2020-11-23 16:44:02',
        current_holder: ' 成印',
        id: 93,
        model: 'Red Mi 4A',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'VIVO',
        create_time: '2020-11-23 14:16:20',
        current_holder: '赖晓真',
        id: 92,
        model: 'Y66',
        original_holder: '成印',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: '小米',
        create_time: '2020-11-23 14:15:43',
        current_holder: '裕鸿',
        id: 91,
        model: 'MI 4LTE',
        original_holder: '赖晓真',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: '小米',
        create_time: '2020-11-20 16:58:32',
        current_holder: '裕鸿',
        id: 90,
        model: 'Red Mi 4A',
        original_holder: '雯涛',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: '小米',
        create_time: '2020-11-19 13:49:02',
        current_holder: '雯涛',
        id: 89,
        model: 'Red Mi 4A',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: '小米',
        create_time: '2020-11-19 11:53:14',
        current_holder: '赖晓真',
        id: 88,
        model: 'MI 4LTE',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'VIVO',
        create_time: '2020-11-18 17:58:03',
        current_holder: '梦华',
        id: 87,
        model: 'Y51',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '5.0.2',
      },
      {
        brand: 'OPPO',
        create_time: '2020-11-16 15:40:59',
        current_holder: '数金',
        id: 86,
        model: 'A57t（粉）',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-11-16 14:05:20',
        current_holder: '成印',
        id: 85,
        model: 'A5',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '8.1.0',
      },
      {
        brand: 'VIVO',
        create_time: '2020-11-16 12:00:00',
        current_holder: '成印',
        id: 84,
        model: 'Y66',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'Apple',
        create_time: '2020-11-16 11:59:47',
        current_holder: '裕鸿',
        id: 83,
        model: 'iPhone7-4',
        original_holder: '成印',
        platform: 'iOS',
        remarks: '',
        system_version: '13',
      },
      {
        brand: 'VIVO',
        create_time: '2020-11-13 11:06:29',
        current_holder: '裕鸿',
        id: 82,
        model: 'Y66（黑）',
        original_holder: '添材',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'VIVO',
        create_time: '2020-11-13 10:57:15',
        current_holder: '裕鸿',
        id: 81,
        model: 'Y51',
        original_holder: '志权',
        platform: 'Android',
        remarks: '',
        system_version: '5.0.2',
      },
      {
        brand: 'VIVO',
        create_time: '2020-11-13 10:50:13',
        current_holder: '添材',
        id: 80,
        model: 'Y66（黑）',
        original_holder: '志权',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'Apple',
        create_time: '2020-11-12 16:43:18',
        current_holder: '日浆',
        id: 79,
        model: 'iPhone5S',
        original_holder: '数金',
        platform: 'iOS',
        remarks: '',
        system_version: '10.2',
      },
      {
        brand: 'Apple',
        create_time: '2020-11-12 16:41:05',
        current_holder: '数金',
        id: 78,
        model: 'iPhone5S',
        original_holder: '楚敏',
        platform: 'iOS',
        remarks: '',
        system_version: '10.2',
      },
      {
        brand: 'VIVO',
        create_time: '2020-11-11 13:48:01',
        current_holder: '裕鸿',
        id: 77,
        model: 'Y66',
        original_holder: '雯涛',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'VIVO',
        create_time: '2020-11-11 10:33:56',
        current_holder: '志权',
        id: 76,
        model: 'Y66（黑）',
        original_holder: '数金',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'VIVO',
        create_time: '2020-11-11 10:33:20',
        current_holder: '雯涛',
        id: 75,
        model: 'Y66',
        original_holder: '志权',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'VIVO',
        create_time: '2020-11-10 18:11:40',
        current_holder: '志权',
        id: 74,
        model: 'Y66',
        original_holder: '成印',
        platform: 'Android',
        remarks: '测试美摄SDK替换',
        system_version: '6.0.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-11-10 18:10:14',
        current_holder: '志权',
        id: 73,
        model: 'A33',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '测试美摄SDK替换',
        system_version: '5.1.1',
      },
      {
        brand: 'Apple',
        create_time: '2020-11-10 16:30:11',
        current_holder: '楚敏',
        id: 72,
        model: 'iPhone5S',
        original_holder: '数金',
        platform: 'iOS',
        remarks: '',
        system_version: '10.2',
      },
      {
        brand: 'Apple',
        create_time: '2020-11-10 12:21:30',
        current_holder: '成印',
        id: 71,
        model: 'iPhone7-4',
        original_holder: '裕鸿',
        platform: 'iOS',
        remarks: '',
        system_version: '13',
      },
      {
        brand: 'VIVO',
        create_time: '2020-11-10 11:49:01',
        current_holder: '志权',
        id: 70,
        model: 'Y51',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '5.0.2',
      },
      {
        brand: 'Apple',
        create_time: '2020-11-10 10:49:56',
        current_holder: '裕鸿',
        id: 69,
        model: 'iPhone7-4',
        original_holder: '燕萍',
        platform: 'iOS',
        remarks: '',
        system_version: '13',
      },
      {
        brand: 'OPPO',
        create_time: '2020-11-06 16:41:28',
        current_holder: '裕鸿',
        id: 68,
        model: 'A5',
        original_holder: '梁裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '8.1.0',
      },
      {
        brand: 'OPPO',
        create_time: '2020-11-06 16:40:43',
        current_holder: '梁裕鸿',
        id: 67,
        model: 'A5',
        original_holder: '士原',
        platform: 'Android',
        remarks: '',
        system_version: '8.1.0',
      },
      {
        brand: 'OPPO',
        create_time: '2020-11-06 11:05:10',
        current_holder: '添材',
        id: 66,
        model: 'A83',
        original_holder: '张迪',
        platform: 'Android',
        remarks: '',
        system_version: '7.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-11-05 15:55:28',
        current_holder: '裕鸿',
        id: 65,
        model: 'A57t（粉）',
        original_holder: '楚敏',
        platform: 'Android',
        remarks: '归海及替换管理人',
        system_version: '6.0.1',
      },
      {
        brand: '小米',
        create_time: '2020-11-02 14:57:42',
        current_holder: '楚敏',
        id: 64,
        model: 'Red Mi 7',
        original_holder: '小占',
        platform: 'Android',
        remarks: '更换管理员及借用人',
        system_version: '9.0',
      },
      {
        brand: 'VIVO',
        create_time: '2020-10-30 17:20:31',
        current_holder: '成印',
        id: 63,
        model: 'Y66',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-30 17:19:37',
        current_holder: '燕萍',
        id: 62,
        model: 'iPhone7-4',
        original_holder: '汤赛',
        platform: 'iOS',
        remarks: '',
        system_version: '13',
      },
      {
        brand: 'VIVO',
        create_time: '2020-10-30 11:46:33',
        current_holder: '裕鸿',
        id: 61,
        model: 'Y66',
        original_holder: '赖晓真',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-29 15:26:15',
        current_holder: '汤赛',
        id: 60,
        model: 'iPhone7-4',
        original_holder: '梦华',
        platform: 'iOS',
        remarks: '',
        system_version: '13',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-29 11:40:16',
        current_holder: '李海涛',
        id: 59,
        model: 'iPhone6S',
        original_holder: '楚敏',
        platform: 'iOS',
        remarks: '自测使用',
        system_version: '11',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-29 10:59:20',
        current_holder: '裕鸿',
        id: 58,
        model: 'A33',
        original_holder: '梦华',
        platform: 'Android',
        remarks: '',
        system_version: '5.1.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-29 10:59:09',
        current_holder: '宪英',
        id: 57,
        model: 'A57（黑）',
        original_holder: '梦华',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-28 15:10:13',
        current_holder: '梦华',
        id: 56,
        model: 'A57（黑）',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-28 15:09:35',
        current_holder: '梦华',
        id: 55,
        model: 'A33',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '5.1.1',
      },
      {
        brand: '小米',
        create_time: '2020-10-28 11:43:42',
        current_holder: '裕鸿',
        id: 54,
        model: 'MI 4LTE',
        original_holder: '成印',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'VIVO',
        create_time: '2020-10-27 17:07:39',
        current_holder: '赖晓真',
        id: 53,
        model: 'Y66',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-26 10:12:23',
        current_holder: '张迪',
        id: 52,
        model: 'A83',
        original_holder: '添材',
        platform: 'Android',
        remarks: '',
        system_version: '7.1',
      },
      {
        brand: '小米',
        create_time: '2020-10-21 14:41:54',
        current_holder: '成印',
        id: 51,
        model: 'MI 4LTE',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-21 14:40:51',
        current_holder: '裕鸿',
        id: 50,
        model: 'A57（黑）',
        original_holder: '士原',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-21 14:40:23',
        current_holder: '士原',
        id: 49,
        model: 'A5',
        original_holder: '康宪英',
        platform: 'Android',
        remarks: '',
        system_version: '8.1.0',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-20 17:23:04',
        current_holder: '志权',
        id: 48,
        model: 'iPhone7-2',
        original_holder: '裕鸿',
        platform: 'iOS',
        remarks: '长期借用',
        system_version: '13',
      },
      {
        brand: 'VIVO',
        create_time: '2020-10-20 11:38:46',
        current_holder: '裕鸿',
        id: 47,
        model: 'Y51',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '从成印那里收回',
        system_version: '5.0.2',
      },
      {
        brand: '魅族',
        create_time: '2020-10-20 11:04:13',
        current_holder: '志权',
        id: 46,
        model: '16T',
        original_holder: '志权',
        platform: 'Android',
        remarks: '替换管理员',
        system_version: '9.0',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-20 10:55:26',
        current_holder: '楚敏',
        id: 45,
        model: 'iPhone6S',
        original_holder: '裕鸿',
        platform: 'iOS',
        remarks: '',
        system_version: '11',
      },
      {
        brand: '小米',
        create_time: '2020-10-20 10:16:05',
        current_holder: '裕鸿',
        id: 44,
        model: 'MI 4LTE',
        original_holder: '陆曼',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: '小米',
        create_time: '2020-10-20 10:15:41',
        current_holder: '裕鸿',
        id: 43,
        model: 'Red Mi 4A',
        original_holder: '士原',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-20 10:15:18',
        current_holder: '数金',
        id: 42,
        model: 'iPhone7-5',
        original_holder: '伟南',
        platform: 'iOS',
        remarks: '',
        system_version: '14',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-20 10:14:59',
        current_holder: '裕鸿',
        id: 41,
        model: 'iPhone6S',
        original_holder: '裕鸿',
        platform: 'iOS',
        remarks: '',
        system_version: '11',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-19 18:33:59',
        current_holder: '裕鸿',
        id: 40,
        model: 'iPhone6S',
        original_holder: '素玲',
        platform: 'iOS',
        remarks: '更换管理员',
        system_version: '11',
      },
      {
        brand: 'VIVO',
        create_time: '2020-10-19 18:29:52',
        current_holder: '裕鸿',
        id: 39,
        model: 'Y66',
        original_holder: '素玲',
        platform: 'Android',
        remarks: '转换管理员',
        system_version: '6.0.1',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-19 18:29:33',
        current_holder: '裕鸿',
        id: 38,
        model: 'iPhone7-2',
        original_holder: '叶添材',
        platform: 'iOS',
        remarks: '转换管理人',
        system_version: '13',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-19 18:29:18',
        current_holder: '添材',
        id: 37,
        model: 'A83',
        original_holder: '添材',
        platform: 'Android',
        remarks: '转换管理人',
        system_version: '7.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-19 18:27:33',
        current_holder: '裕鸿',
        id: 36,
        model: 'A33',
        original_holder: '添材',
        platform: 'Android',
        remarks: '',
        system_version: '5.1.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-19 18:06:20',
        current_holder: '添材',
        id: 35,
        model: 'A83',
        original_holder: '温婕',
        platform: 'Android',
        remarks: '',
        system_version: '7.1',
      },
      {
        brand: '魅族',
        create_time: '2020-10-16 17:14:24',
        current_holder: '志权',
        id: 34,
        model: '16T',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '测试验证触漫极速版相关问题',
        system_version: '9.0',
      },
      {
        brand: '魅族',
        create_time: '2020-10-16 17:14:23',
        current_holder: '志权',
        id: 33,
        model: '16T',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '测试验证触漫极速版相关问题',
        system_version: '9.0',
      },
      {
        brand: '魅族',
        create_time: '2020-10-16 17:14:22',
        current_holder: '志权',
        id: 32,
        model: '16T',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '测试验证触漫极速版相关问题',
        system_version: '9.0',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-16 17:13:47',
        current_holder: '温婕',
        id: 31,
        model: 'A83',
        original_holder: '濠州',
        platform: 'Android',
        remarks: '',
        system_version: '7.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-14 14:08:30',
        current_holder: '士原',
        id: 30,
        model: 'A57（黑）',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: '魅族',
        create_time: '2020-10-14 11:18:17',
        current_holder: '裕鸿',
        id: 29,
        model: '16T',
        original_holder: '志权',
        platform: 'Android',
        remarks: '归还',
        system_version: '9.0',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-12 17:03:41',
        current_holder: '数金',
        id: 28,
        model: 'iPhone XR',
        original_holder: '数金',
        platform: 'iOS',
        remarks: '',
        system_version: '12.1.2',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-12 17:03:24',
        current_holder: '数金',
        id: 27,
        model: 'iPhone XR',
        original_holder: '超瑜',
        platform: 'iOS',
        remarks: '',
        system_version: '12.1.2',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-12 17:03:04',
        current_holder: '数金',
        id: 26,
        model: 'iPhone5',
        original_holder: '数金',
        platform: 'iOS',
        remarks: '',
        system_version: '10.3',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-12 14:15:21',
        current_holder: '裕鸿',
        id: 25,
        model: 'A57（黑）',
        original_holder: '海威',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-10-12 14:14:51',
        current_holder: '添材',
        id: 24,
        model: 'A33',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '5.1.1',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-12 14:14:06',
        current_holder: '伟南',
        id: 23,
        model: 'iPhone7-5',
        original_holder: '裕鸿',
        platform: 'iOS',
        remarks: '',
        system_version: '14',
      },
      {
        brand: '小米',
        create_time: '2020-10-10 18:26:01',
        current_holder: '士原',
        id: 22,
        model: 'Red Mi 4A',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: '小米',
        create_time: '2020-10-10 10:46:50',
        current_holder: '陆曼',
        id: 21,
        model: 'MI 4LTE',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'Apple',
        create_time: '2020-10-10 10:25:54',
        current_holder: '叶添材',
        id: 20,
        model: 'iPhone7-2',
        original_holder: '素玲',
        platform: 'iOS',
        remarks: '',
        system_version: '13',
      },
      {
        brand: '魅族',
        create_time: '2020-10-09 09:59:55',
        current_holder: '志权',
        id: 19,
        model: '16T',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '测试安卓优化需求',
        system_version: '9.0',
      },
      {
        brand: '魅族',
        create_time: '2020-09-30 17:31:18',
        current_holder: '裕鸿',
        id: 18,
        model: '16T',
        original_holder: '志权',
        platform: 'Android',
        remarks: '归还',
        system_version: '9.0',
      },
      {
        brand: '小米',
        create_time: '2020-09-30 17:31:05',
        current_holder: '裕鸿',
        id: 17,
        model: 'Red Mi 4A',
        original_holder: '志权',
        platform: 'Android',
        remarks: '归还',
        system_version: '6.0.1',
      },
      {
        brand: '小米',
        create_time: '2020-09-29 17:28:47',
        current_holder: '裕鸿',
        id: 16,
        model: 'MI 4LTE',
        original_holder: '陈成印',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: '魅族',
        create_time: '2020-09-29 16:44:44',
        current_holder: '志权',
        id: 15,
        model: '16T',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '9.0',
      },
      {
        brand: 'OPPO',
        create_time: '2020-09-29 16:11:24',
        current_holder: '海威',
        id: 14,
        model: 'A57（黑）',
        original_holder: '芷晴',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: '魅族',
        create_time: '2020-09-28 15:57:29',
        current_holder: '裕鸿',
        id: 13,
        model: '16T',
        original_holder: '少华',
        platform: 'Android',
        remarks: '',
        system_version: '9.0',
      },
      {
        brand: 'OPPO',
        create_time: '2020-09-27 18:39:18',
        current_holder: '裕鸿',
        id: 12,
        model: 'A33',
        original_holder: '汤麒',
        platform: 'Android',
        remarks: '',
        system_version: '5.1.1',
      },
      {
        brand: '小米',
        create_time: '2020-09-27 15:10:32',
        current_holder: '小占',
        id: 11,
        model: 'Red Mi 7',
        original_holder: '占皓',
        platform: 'Android',
        remarks: '',
        system_version: '9.0',
      },
      {
        brand: '小米',
        create_time: '2020-09-27 15:10:18',
        current_holder: '占皓',
        id: 10,
        model: 'Red Mi 7',
        original_holder: '邓亚洲',
        platform: 'Android',
        remarks: '',
        system_version: '9.0',
      },
      {
        brand: '小米',
        create_time: '2020-09-27 11:05:42',
        current_holder: '志权',
        id: 9,
        model: 'Red Mi 4A',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '测试安卓优化需求',
        system_version: '6.0.1',
      },
      {
        brand: '小米',
        create_time: '2020-09-27 11:00:59',
        current_holder: '志权',
        id: 8,
        model: 'Red Mi 4A',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '',
        system_version: '6.0.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-09-27 10:53:33',
        current_holder: '康宪英',
        id: 7,
        model: 'A5',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '国庆值班',
        system_version: '8.1.0',
      },
      {
        brand: 'Apple',
        create_time: '2020-09-24 13:50:41',
        current_holder: '裕鸿',
        id: 6,
        model: 'iPhone7-5',
        original_holder: '芷晴',
        platform: 'iOS',
        remarks: '',
        system_version: '14',
      },
      {
        brand: '小米',
        create_time: '2020-09-24 10:14:39',
        current_holder: '陈成印',
        id: 5,
        model: 'MI 4LTE',
        original_holder: '士原',
        platform: 'Android',
        remarks: '客户端开发',
        system_version: '6.0.1',
      },
      {
        brand: 'OPPO',
        create_time: '2020-09-24 10:13:30',
        current_holder: '汤麒',
        id: 4,
        model: 'A33',
        original_holder: '裕鸿',
        platform: 'Android',
        remarks: '运营',
        system_version: '5.1.1',
      },
      {
        brand: '小米',
        create_time: '2020-09-23 18:20:15',
        current_holder: '邓亚洲',
        id: 3,
        model: 'Red Mi 7',
        original_holder: '小占',
        platform: 'Android',
        remarks: '安卓开发',
        system_version: '9.0',
      },
    ];
    let result = 0;
    data.forEach(item => {
      result += 1;
      const payload = { ...item };
      delete payload.id;
      this.app.mysql.insert('divice_transfer_record', payload);
    });


    return result;
  }
}

module.exports = HomeService;