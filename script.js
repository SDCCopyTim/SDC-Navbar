import http from 'k6/http';
import { check, sleep } from 'k6';
import { Counter } from 'k6/metrics';

let errorRate = new Counter('errors');


export let options = {
  stages: [
    { duration: '20s', target: 100},
    { duration: '40s', target: 100},
    { duration: '20s', target: 300},
    { duration: '40s', target: 300},
    { duration: '20s', target: 500},
    { duration: '40s', target: 500},
    { duration: '20s', target: 700},
    { duration: '40s', target: 700},
    { duration: '20s', target: 900},
    { duration: '40s', target: 900},
    { duration: '20s', target: 1100},
    { duration: '40s', target: 1100},
    { duration: '80s', target: 0},

  ],

};
export default function () {
  let res = http.get('http://localhost:3002/api/search/camps/s');
  check(res, { 'status was 200': (r) => r.status === 200 }) || errorRate.add(1);
  sleep(1);
}
