/**
 * Copyright (c) 2024-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Uri } from 'vscode';
import { createModelSchema, primitive } from 'serializr';
import {
  usingModelSchema,
  SerializationFactory,
} from '../utils/SerializationUtils';
import { TextInterval } from './TextInterval';

export class TextLocation {
  documentId!: string;
  textInterval!: TextInterval;

  uri(): Uri {
    return Uri.parse(this.documentId);
  }

  static readonly serialization = new SerializationFactory(
    createModelSchema(TextLocation, {
      documentId: primitive(),
      textInterval: usingModelSchema(TextInterval.serialization.schema),
    }),
  );
}
