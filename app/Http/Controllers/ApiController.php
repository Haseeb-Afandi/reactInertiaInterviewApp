<?php

namespace App\Http\Controllers;
use GuzzleHttp\Client;
use inertia\Inertia;
use Validator;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function initApi()
    {
        $client = new Client();
        $requestUrl = 'https://api.mylimobiz.com/v0/oauth2/token';

        try {
            //     $response = $client->post($requestUrl, [
            //         'headers' => [
            //             'Content-Type' => 'application/json',
            //         ],
            //         'json' => [
            //             'grant_type' => 'client_credentials',
            //             'client_id' => 'ca_customer_mayfairbv',
            //             'client_secret' => 'pmudJrHpv7zscw2vbdlJJFFWcIq4BLygs8gvwzW26ESWhJua67',
            //         ],
            //     ], );

            //     $responseJson = $response->getBody()->getContents();
            //     $responseDecoded = json_decode($responseJson, true);
            //     $authToken = $responseDecoded['access_token'];

            return inertia::render('Form', [
                // "test" => $authToken,
                "test" => 'tickticktick',
            ]);
        } catch (\Throwable $th) {



            return inertia::render('Form', [
                "test" => $th->getMessage(),
            ]);

        }

    }

    public function fetchListings(Request $request)
    {
        $validated = Validator::make($request->all(), [
            'from' => 'required|string',
            'to' => 'required|string',
            'pickUpDate' => 'required|string',
            'pickUpTime' => 'required|string',
            'passengers' => 'required|string',
        ]);

        print_r($request->passengers);

        return Inertia::render('Listings', [
            'passengers' => $request->passengers,
        ]);
    }
}
