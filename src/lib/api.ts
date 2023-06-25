import { Api, RequestParams, HttpResponse, FinancialReport} from './_api';
import { produceMockReport } from './mocks';

const makeSuccessfulResponse = <T>(data?: T) => {
  const options = { status: 200 };
  const response = new Response(null, options) as HttpResponse<T, void>;
  if (data) {
    response.data = data;
  }
  return Promise.resolve(response);
};

const mockReport = produceMockReport({});

class MockApi extends Api<null> {
  constructor(...args: ConstructorParameters<typeof Api>) {
    super(...args);

    this.report = {
      getCurrentReport: (_params?: RequestParams) =>
        makeSuccessfulResponse<FinancialReport>(mockReport),
      moveTransaction: (
        _data: {
          transactionId: string;
          fromSection: string;
          toSection: string;
        },
        _params?: RequestParams
      ) => makeSuccessfulResponse<void>(),
    };
  }
};

const ApiInstance = new MockApi();

export default ApiInstance;
