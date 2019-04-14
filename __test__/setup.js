import {plugins} from 'pretty-format'
import "jest-dom/extend-expect";

expect.addSnapshotSerializer(plugins.ConvertAnsi);