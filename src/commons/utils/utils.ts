import { Injectable } from '@nestjs/common';
import { IUtils } from './_interfaces';

/**
 * Created by Alexander Llacho
 */

@Injectable()
export class Utils implements IUtils {
  diacriticSensitiveRegex(value = ''): string {
    return value
      .replace(/a/g, '[a,á,à,ä]')
      .replace(/e/g, '[e,é,ë]')
      .replace(/i/g, '[i,í,ï]')
      .replace(/o/g, '[o,ó,ö,ò]')
      .replace(/u/g, '[u,ü,ú,ù]');
  }
}
