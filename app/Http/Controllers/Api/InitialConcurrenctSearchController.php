<?php
namespace App\Http\Controllers\Api;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use App\Http\Requests\InitialConcurrentSearchRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class InitialConcurrentSearchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return LengthAwarePaginator|mixed
     */
    public function index(Request $request,$scraper_id)
    {
        return InitialConcurrentSearch::loadAllConcurrentSearch($projectId,$scraper_id);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param InitialConcurrentSearchRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(InitialConcurrentSearchRequest $request,$projectId,$scraper_id)
    {
        $user = $request->user();
        $scraper = Scraper::mine($user->id)::project($projectId)->findOrFail($scraper_id);
        $initialConcurrentSearch = new InitialConcurrentSearch($request->validated());
        $scraper->initialconcurrentsearch()->save($initialConcurrentSearch);
        return response()->json($initialConcurrentSearch, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        if (!$request->user()->is_admin) {
            return InitialConcurrentSearch::mine($request->user()->id)->findOrFail($id);
        }
        return InitialConcurrentSearch::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ArticleRequest $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(InitialConcurrentSearchRequest $request, $id)
    {
        $initialConcurrentSearch = InitialConcurrentSearch::findOrFail($id);
        $data = $request->validated();
        $initialConcurrentSearch->update($data);
        return response()->json($initialConcurrentSearch, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $initialConcurrentSearch = InitialConcurrentSearch::findOrFail($id);

        $initialConcurrentSearch->delete();

        return response([], 200);
    }
}
